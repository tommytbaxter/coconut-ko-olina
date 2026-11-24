# Coconut Ko Olina — working website draft

A portable, static property website for Coconut Plantation 1200-4. Uses actual photographs preserved from the existing owner website. No build step, subscriptions, or package installation needed.

## See the draft

Live design preview: https://tommytbaxter.github.io/coconut-ko-olina/

Source repository: https://github.com/tommytbaxter/coconut-ko-olina

Open `index.html` in a browser, or from this folder run `python3 -m http.server 8765 --bind 127.0.0.1` and visit `http://127.0.0.1:8765/`.

## Put this on GitHub Pages

1. Sign in to the same GitHub account used for the Miller website.
2. Create a new repository named `coconut-ko-olina`. Do not modify the Miller repository.
3. For GitHub Free hosting, use a public repository. Both the source files and the preview site will be public; do not upload confidential information. A noindex request is not access control.
4. Upload the **contents** of this folder into the repository root, keeping `assets/images/` intact. `index.html` must be at the top level, not inside another `coconut-ko-olina` folder. Do not upload this folder as an unexpanded ZIP.
5. Commit the files to `main`.
6. Open repository **Settings → Pages**. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
7. GitHub will display the actual preview URL in Pages settings when deployment finishes. Keep that returned URL; it is separate from coconutkoolina.com.

Do not enter a custom domain or change DNS during design work. The existing Weebly website remains the production site.

## What is working

- Responsive desktop/mobile navigation and section links.
- Four bedroom previews and a filterable 50-photo gallery.
- Full-screen photo viewer with close, previous/next, and keyboard controls.
- Inquiry form that prepares an email in the visitor's email app. It does not send mail, collect records, accept payment, or reserve dates.
- Existing Google Calendar, loaded only when requested. It is not verified as current.
- Links to the map, manager phone/email, and management website.

## Make changes together

- `index.html`: page headings, text, residence facts, bedroom details, links.
- `styles.css`: typography, colors, spacing, desktop/mobile layout.
- `content.js`: photo captions/categories, manager email and calendar URL.
- `assets/images/`: optimized WebP versions of actual website photos.
- `app.js`: gallery, menu, calendar and inquiry behavior.

Ask for specific edits, for example: “Use the lanai as the opening image,” “Make the headline smaller,” or “Move the bedroom photos higher.” After files are committed to the publishing branch, GitHub Pages republishes them.

## Before public launch

Confirm facts, furnishings, sleeping arrangements, approved minimum stay, pricing, taxes/fees, utility allowance, parking, amenity access, current manager contacts and the maintained availability source. No starting rate is published in this draft. No guest reviews or availability dates are invented.

The banner, `noindex,nofollow` meta tag, and blocking `robots.txt` are intentional during review. Remove these deliberately when the final site is approved. Add approved metadata, social preview, canonical URL and appropriate structured data; choose consent/analytics settings and define manager inquiry tracking. There is no analytics code or tracking identifier installed yet.

Preserve existing page paths or prepare redirects supported by the final host. GitHub Pages does not offer arbitrary server-side redirect rules; old .html paths can be preserved as actual pages. Decide this before domain cutover.

The supplied reference photos are current web copies, not necessarily original camera files or evidence of present furnishings. Confirm image rights and obtain higher-resolution originals for the final hero if available.

## Deployment status

Published design preview on GitHub Pages from the main branch and repository root. The source and optimized photographs are committed to tommytbaxter/coconut-ko-olina. The existing coconutkoolina.com website and domain settings remain separate.

For future revisions, edit the source files and commit to main. GitHub Pages rebuilds the preview automatically. Keep the draft banner and noindex settings until final launch is approved.
