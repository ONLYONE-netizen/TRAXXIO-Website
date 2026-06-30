import SectionLabel from '@/components/SectionLabel';
import EmailForm from '@/components/EmailForm';
import { siteConfig } from '@/lib/data';

export const metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: 'Get in touch with TRAXXIO or subscribe to the newsletter.',
};

const channels = [
  { label: 'Telegram', value: '@TRAXXIO', href: siteConfig.telegram },
  { label: 'X / Twitter', value: '@_TRAXXIO_', href: siteConfig.twitter },
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

export default function ContactPage() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mb-5 text-[clamp(32px,5vw,52px)] font-bold leading-tight text-offwhite">Let&apos;s Talk.</h1>
          <p className="mb-10 max-w-[440px] text-[15px] leading-relaxed text-muted">
            Questions about a product, mentorship, or partnerships? Reach the team directly, or join the community
            for the fastest response.
          </p>

          <div className="flex flex-col gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[14px] border border-border bg-panel px-6 py-5 transition-colors hover:border-bordersoft"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{c.label}</span>
                <span className="text-sm font-medium text-offwhite">{c.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-[20px] border border-border bg-panel p-9">
            <SectionLabel>Newsletter</SectionLabel>
            <h2 className="mb-2.5 text-2xl font-bold text-offwhite">Stay in the Loop.</h2>
            <p className="mb-7 text-sm leading-relaxed text-muted">
              Get trading insights, mentorship drops, product launches, and market updates delivered directly to
              your inbox. No spam. Just signal.
            </p>
            <EmailForm
              id="main-newsletter-email"
              source="main-newsletter"
              placeholder="you@example.com"
              ctaLabel="Subscribe to Newsletter"
              successMessage="You are subscribed. Welcome to the TRAXXIO inner circle."
              layout="stack"
            />
            <p className="mt-3 text-xs leading-relaxed text-muted">No spam. Unsubscribe anytime. Your email is never shared.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
