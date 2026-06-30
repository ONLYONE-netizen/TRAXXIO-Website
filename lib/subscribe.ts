'use client';

// Local-first email capture so the UI works out of the box.
// Replace saveEmail()'s body with a real API call (your backend,
// Mailchimp, ConvertKit, Supabase, etc.) before going to production.
export function saveEmail(email: string, source: string) {
  try {
    const key = `traxxio_emails_${source}`;
    const existing: string[] = JSON.parse(localStorage.getItem(key) || '[]');
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem(key, JSON.stringify(existing));
    }
  } catch {
    // localStorage unavailable (e.g. private browsing) — fail silently
  }

  // TODO: POST to your backend
  // fetch('/api/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, source }),
  // });
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
