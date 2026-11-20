import { company } from '../data/site';

/**
 * Web3Forms — delivers website form submissions to the inbox the access key
 * (company.web3formsKey) was created with. Free plan: 250 submissions/month.
 * Web3Forms uses the `email` field as the Reply-To address.
 */
export async function sendLead(subject: string, fields: Record<string, string>): Promise<boolean> {
  const clean = Object.fromEntries(
    Object.entries(fields).filter(([, v]) => (v ?? '').toString().trim() !== '')
  );
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: company.web3formsKey,
        subject,
        from_name: 'HKM Venture Global Website',
        ...clean,
      }),
    });
    const json = await res.json().catch(() => ({}));
    return res.ok && json.success !== false;
  } catch {
    return false;
  }
}
