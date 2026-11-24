'use strict';
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open)});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('open')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('open');menuButton.focus()}});

const grid=document.querySelector('#gallery-grid');
const moreButton=document.querySelector('#more-photos');
const galleryStatus=document.querySelector('#gallery-status');
const filters=[...document.querySelectorAll('[data-filter]')];
const lightbox=document.querySelector('#lightbox');
const lightboxImage=document.querySelector('#lightbox-image');
const lightboxCaption=document.querySelector('#lightbox-caption');
const lightboxCount=document.querySelector('#lightbox-count');
let activeFilter='all',visibleCount=8,photoIndex=0,opener=null;
function filteredPhotos(){return window.COCONUT.photos.filter(photo=>activeFilter==='all'||photo.group===activeFilter)}
function renderGallery(){
 const photos=filteredPhotos();grid.replaceChildren();
 photos.slice(0,visibleCount).forEach((photo,index)=>{
  const button=document.createElement('button');button.type='button';button.className='gallery-item';button.setAttribute('aria-label','View photograph: '+photo.caption);
  const wrap=document.createElement('span');wrap.className='image-wrap';
  const img=document.createElement('img');img.src=photo.src;img.alt=photo.alt;img.loading='lazy';img.width=550;img.height=360;
  const zoom=document.createElement('span');zoom.className='zoom-symbol';zoom.textContent='+';zoom.setAttribute('aria-hidden','true');
  wrap.append(img,zoom);const caption=document.createElement('span');caption.className='gallery-caption';caption.textContent=photo.caption;button.append(wrap,caption);
  button.addEventListener('click',()=>{opener=button;photoIndex=index;updateLightbox();lightbox.showModal();document.body.classList.add('modal-open')});grid.append(button);
 });
 const shown=Math.min(visibleCount,photos.length);galleryStatus.textContent=`Showing ${shown} of ${photos.length} photographs`;moreButton.hidden=shown>=photos.length;
}
function updateLightbox(){const photos=filteredPhotos();const photo=photos[photoIndex];lightboxImage.src=photo.src;lightboxImage.alt=photo.alt;lightboxCaption.textContent=photo.caption;lightboxCount.textContent=`${photoIndex+1} / ${photos.length}`}
function movePhoto(offset){const photos=filteredPhotos();photoIndex=(photoIndex+offset+photos.length)%photos.length;updateLightbox()}
filters.forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;visibleCount=8;filters.forEach(filter=>filter.setAttribute('aria-pressed',String(filter===button)));renderGallery()}));
moreButton.addEventListener('click',()=>{const previous=grid.children.length;visibleCount+=8;renderGallery();grid.children[previous]?.focus()});
document.querySelector('#lightbox-close').addEventListener('click',()=>lightbox.close());
document.querySelector('#lightbox-prev').addEventListener('click',()=>movePhoto(-1));
document.querySelector('#lightbox-next').addEventListener('click',()=>movePhoto(1));
lightbox.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus()});
lightbox.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();movePhoto(-1)}if(event.key==='ArrowRight'){event.preventDefault();movePhoto(1)}});
renderGallery();

const arrival=document.querySelector('#arrival'),departure=document.querySelector('#departure');
const localToday=new Date();localToday.setMinutes(localToday.getMinutes()-localToday.getTimezoneOffset());arrival.min=localToday.toISOString().slice(0,10);
arrival.addEventListener('change',()=>{departure.min=arrival.value;if(departure.value&&departure.value<=arrival.value)departure.value=''});
document.querySelector('#inquiry-form').addEventListener('submit',event=>{
 event.preventDefault();const error=document.querySelector('#inquiry-error');
 if(!arrival.value||!departure.value||departure.value<=arrival.value){error.textContent='Please choose a departure date after your arrival.';departure.focus();return}
 error.textContent='';const format=value=>new Date(value+'T12:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
 const guests=document.querySelector('#guests').value;const note=document.querySelector('#message').value.trim();
 const body=`Hi Garrett,\n\nI'm interested in Coconut Plantation 1200-4.\n\nPreferred arrival: ${format(arrival.value)}\nPreferred departure: ${format(departure.value)}\nNumber of guests: ${guests}\n\n${note?note+'\n\n':''}Please confirm availability, the applicable minimum stay, and the total rental quote including taxes, fees, and utility allowances.\n\nThank you!`;
 window.location.href=`mailto:${window.COCONUT.managerEmail}?subject=${encodeURIComponent('Rental inquiry — Coconut Plantation 1200-4')}&body=${encodeURIComponent(body)}`;
});
document.querySelector('#calendar-trigger').addEventListener('click',event=>{
 const button=event.currentTarget,panel=document.querySelector('#calendar-panel');const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));panel.hidden=!open;
 if(open&&!document.querySelector('#calendar-container iframe')){const iframe=document.createElement('iframe');iframe.title='Existing Coconut Plantation 1200-4 availability calendar; verify dates with management';iframe.src=window.COCONUT.calendarUrl;iframe.loading='lazy';iframe.referrerPolicy='strict-origin-when-cross-origin';document.querySelector('#calendar-container').append(iframe)}
});
document.querySelector('#year').textContent=new Date().getFullYear();
