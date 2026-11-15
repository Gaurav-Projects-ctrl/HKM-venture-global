# HKM Venture Global website: changes & go-live checklist

## What changed
New pages:
- /about — story, mission & vision, six buyer commitments, founding members, partner selection process, government registrations
- /products — full catalogue across all three verticals, with sticky section tabs
- /products/pharmaceuticals, /products/chemicals, /products/frozen-foods — one page per vertical: product range, how we work, documentation, markets, FAQ (with FAQ schema for Google), enquiry form with the product pre-selected
- /contact — WhatsApp, email, phone and brochure shortcuts plus the enquiry form
- /privacy-policy and /terms — replace the old "#" links
- 404 page

Site-wide:
- Floating WhatsApp button on every page
- "Download Brochure" buttons (nav, page headers, CTA, footer). It opens a short form (name, company, email, country), emails the lead to you through Web3Forms, then downloads the PDF
- New navigation: Products dropdown, working mobile menu (the old burger button did nothing), links to real pages
- Footer: contact details, government registrations, links to all pages
- SEO: unique title, description, canonical and Open Graph tags per page

Home page (minimal edits):
- Removed inflated claims: "50+ countries", "5000+ products", replaced with verifiable points (3 sectors, 24h response, WHO-GMP certified partners)
- Healthcare & Pharmaceuticals now listed first; product cards link to the vertical pages
- Fixed: contact form could be submitted empty, and slight sideways scroll on phones

## Before going live: replace the placeholders
All content lives in **src/data/site.ts**. Search it for "PLACEHOLDER".
1. Registered office address
2. Domain email (currently info@hkmventureglobal.com — confirm it exists)
3. Phone number
4. WhatsApp number — digits only with country code, e.g. 919876543210 (the WhatsApp button will not work until this is set)
5. Founding members — names, roles, 2–3 line bios, LinkedIn links, photos (put photos in public/team/ and set photo: '/team/name.jpg')
6. Government registrations — IEC, GSTIN, drug licence, RCMC (delete any line not yet obtained)
7. Brochure — replace public/brochure/hkm-venture-global-brochure.pdf with the designed brochure (same file name). The current file is an interim 2-page version.
8. LinkedIn company page URL

## Ask the client to confirm
- Product lists on each vertical page are representative examples. Remove anything they cannot actually supply.
- The six commitments on /about (samples before orders, 24h reply, trial orders, batch traceability) are promises — confirm they can keep every one.
- Privacy Policy and Terms are general templates; have them reviewed before relying on them legally.
- The Web3Forms access key sends enquiries and brochure leads to one inbox — confirm someone at HKM reads it.

## Run / build
npm install
npm run dev        # local preview at http://localhost:4321
npm run build      # production files in dist/ — deploy as before
