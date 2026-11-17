/**
 * EmailJS — sends website form submissions to info@hkmventureglobal.com.
 * These IDs are public by design; the account is restricted to the site's domains in EmailJS → Security.
 */
export const EMAILJS = {
  publicKey: 'QZv_AWdUtPQblMPQf',
  serviceId: 'service_q62sb5y',
  templates: {
    leadNotification: 'template_urty87q', // to HKM — enquiries and brochure downloads
    autoReply: 'template_0uaqblb',        // to the buyer — enquiries only
  },
};

const DASH = '—';

/** Send one EmailJS template. Resolves true on success. */
export async function sendEmail(templateId: string, params: Record<string, string>): Promise<boolean> {
  // Empty fields show as "—" in the email instead of a blank row
  const template_params = Object.fromEntries(
    Object.entries(params).map(([k, v]) => [k, (v ?? '').toString().trim() || DASH])
  );
  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS.serviceId,
        template_id: templateId,
        user_id: EMAILJS.publicKey,
        template_params,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
