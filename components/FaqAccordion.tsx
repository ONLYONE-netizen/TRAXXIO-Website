'use client';

import { useState } from 'react';

export default function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border overflow-hidden rounded-[16px] border border-border bg-panel">
      {faqs.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-offwhite">{item.q}</span>
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-blue transition-transform ${
                  expanded ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            {expanded && (
              <div className="px-6 pb-5">
                <p className="text-[14px] leading-relaxed text-muted">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
