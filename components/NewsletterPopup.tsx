'use client';

import { useEffect, useState } from 'react';
import { isValidEmail, saveEmail } from '@/lib/subscribe';
import { Button } from './Button';

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('traxxio_popup_seen')) return;
    } catch {
      return;
    }
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setVisible(false);
    try {
      sessionStorage.setItem('traxxio_popup_seen', '1');
    } catch {
      /* noop */
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(value)) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    saveEmail(value, 'popup');
    setDone(true);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex animate-fadeIn items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-[440px] animate-slideUp rounded-[20px] border border-bordersoft bg-panel p-9">
        <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-[20px] bg-blue" />
        <button
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-lg text-muted transition-colors hover:bg-deep hover:text-offwhite"
        >
          ×
        </button>

        {!done ? (
          <>
            <div className="eyebrow mb-3">TRAXXIO Newsletter</div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-offwhite">Stay Ahead of the Market.</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Join the TRAXXIO inner circle. Get trading insights, mentorship drops, and platform updates delivered to your inbox. No spam.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label htmlFor="popup-email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  Email Address
                </label>
                <input
                  id="popup-email"
                  type="email"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full rounded-[10px] border bg-deep px-4 py-3 text-sm text-offwhite outline-none transition-colors placeholder:text-muted focus:border-blue ${
                    error ? 'border-red' : 'border-border'
                  }`}
                />
              </div>
              <Button type="submit" full>
                Subscribe Now
              </Button>
              <p className="text-center text-xs leading-relaxed text-muted">No spam. Unsubscribe anytime.</p>
            </form>
          </>
        ) : (
          <>
            <div className="mt-2 rounded-[10px] border border-blue-mid/40 bg-blue-soft p-5 text-center text-sm leading-relaxed text-blue">
              <div className="mb-2 text-xl font-bold text-offwhite">You are in.</div>
              Welcome to the TRAXXIO inner circle. Watch your inbox for trading insights and product updates.
            </div>
            <Button variant="outline" full className="mt-4" onClick={close}>
              Close
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
