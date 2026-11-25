import { tracking } from '../data/tracking';

type LeadEvent = keyof typeof tracking.adsConversionLabels;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Records a lead action for Google Ads / Google Tag Manager.
 *  - Always pushes a dataLayer event (e.g. `lead_quote`) that a GTM trigger can use.
 *  - Also fires a Google Ads conversion directly when tracking.adsConversionId
 *    and the event's label are filled in src/data/site.ts.
 */
export function trackLead(event: LeadEvent, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: `lead_${event}`, ...params });

  const id = tracking.adsConversionId;
  const label = tracking.adsConversionLabels[event];
  if (id && label && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: `${id}/${label}` });
  }
}
