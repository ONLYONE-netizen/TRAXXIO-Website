'use client';

import { useState } from 'react';
import { isValidEmail, saveEmail } from '@/lib/subscribe';
import { Button } from './Button';

export default function EmailForm({
  id,
  source,
  placeholder = 'your@email.com',
  ctaLabel = 'Notify Me',
  successMessage = 'You are on the list.',
  helperText,
  layout = 'row',
}: {
  id: string;
  source: string;
  placeholder?: string;
  ctaLabel?: string;
  successMessage?: string;
  helperText?: string;
  layout?: 'row' | 'stack';
}) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(value)) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    saveEmail(value, source);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-[10px] border border-blue-mid/40 bg-blue-soft px-4 py-3 font-mono text-[13px] text-blue">
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      {helperText && <p className="text-[13px] leading-relaxed text-muted">{helperText}</p>}
      <div className={layout === 'row' ? 'flex flex-col gap-2 sm:flex-row' : 'flex flex-col gap-2'}>
        <input
          type="email"
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={`w-full flex-1 rounded-[10px] border bg-panel px-4 py-3 text-sm text-offwhite outline-none transition-colors placeholder:text-muted focus:border-blue ${
            error ? 'border-red' : 'border-border'
          }`}
        />
        <Button type="submit" className="whitespace-nowrap">
          {ctaLabel}
        </Button>
      </div>
    </form>
  );
}
