'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, siteConfig } from '@/lib/data';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex h-[60px] items-center justify-between border-b border-border bg-black/90 px-5 backdrop-blur-md sm:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-offwhite" onClick={() => setOpen(false)}>
          TRAXXIO
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  pathname === link.href ? 'text-offwhite' : 'text-muted hover:text-offwhite'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[8px] bg-blue px-4 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-mid"
            >
              Join Community
            </a>
          </li>
        </ul>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-[5px] border-none bg-transparent p-1 md:hidden"
        >
          <span
            className={`block h-[1.5px] w-[22px] rounded bg-offwhite transition-transform ${
              open ? 'translate-y-[6.5px] rotate-45' : ''
            }`}
          />
          <span className={`block h-[1.5px] w-[22px] rounded bg-offwhite transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-[1.5px] w-[22px] rounded bg-offwhite transition-transform ${
              open ? '-translate-y-[6.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[60px] z-40 flex flex-col gap-1 border-b border-border bg-panel px-6 py-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] text-muted transition-colors hover:bg-deep hover:text-offwhite"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-[10px] bg-blue px-4 py-3 text-center text-sm font-medium text-white"
          >
            Join Community
          </a>
        </div>
      )}
    </>
  );
}
