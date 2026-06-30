import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-site flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="text-lg font-bold tracking-tight text-offwhite">TRAXXIO</div>
          <div className="font-mono text-xs text-muted">{siteConfig.tagline}</div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted transition-colors hover:text-offwhite">
            Telegram
          </a>
          <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted transition-colors hover:text-offwhite">
            X / Twitter
          </a>
          <a href="/faq" className="text-[13px] text-muted transition-colors hover:text-offwhite">
            FAQ
          </a>
          <a href={siteConfig.weeklyReport} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted transition-colors hover:text-offwhite">
            Weekly Report
          </a>
          <a href={`mailto:${siteConfig.email}`} className="text-[13px] text-muted transition-colors hover:text-offwhite">
            Contact
          </a>
        </div>

        <div className="font-mono text-xs text-muted">© {new Date().getFullYear()} TRAXXIO. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
