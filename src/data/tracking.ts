/* Kept in its own file so the browser script that sends conversions
   does not pull in all of site.ts. */
// ─────────────────────────────────────────────────────────────
//  Google Ads conversion tracking
//  googleTagId: the Google tag shown in Google Ads (installed on every page).
//  adsConversionId + labels: from Google Ads → Goals → Conversions → each
//  conversion action → "Use Google tag" / "Install the tag yourself".
//  The ID looks like 'AW-1234567890'; each label like 'AbC-D_efG-h12_34-567'.
//  Leave a label '' until that conversion action exists — the site then only
//  sends the dataLayer event (lead_quote, lead_brochure, lead_whatsapp, lead_phone).
// ─────────────────────────────────────────────────────────────
export const tracking = {
  googleTagId: 'GTM-NPTW3MDN',
  adsConversionId: 'AW-18584118147',
  adsConversionLabels: {
    quote: 'Lgc1CNiA7r0dEIPHzJ1F', // "Request a quote" form sent
    brochure: 'OZfhCNuA7r0dEIPHzJ1F', // Brochure request form sent
    whatsapp: '72q0CN6A7r0dEIPHzJ1F', // WhatsApp button / link clicked
    phone: 'SO5rCOGA7r0dEIPHzJ1F',    // Phone number clicked
  },
};
