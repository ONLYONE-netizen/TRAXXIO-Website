import SectionLabel from '@/components/SectionLabel';
import FaqAccordion from '@/components/FaqAccordion';
import { LinkButton } from '@/components/Button';
import { faqs, siteConfig } from '@/lib/data';

export const metadata = {
  title: `FAQ | ${siteConfig.name}`,
  description: 'Answers to common questions about TRAXXIO products, mentorship, and community.',
};

export default function FaqPage() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[760px]">
        <SectionLabel>FAQ</SectionLabel>
        <h1 className="mb-3 text-[clamp(32px,5vw,52px)] font-bold leading-tight text-offwhite">Frequently Asked Questions</h1>
        <p className="mb-12 max-w-[480px] text-[15px] text-muted">
          Can&apos;t find what you&apos;re looking for? Reach out and the team will get back to you.
        </p>

        <FaqAccordion faqs={faqs} />

        <div className="mt-12 flex flex-col items-start gap-4 rounded-[16px] border border-border bg-panel p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="mb-1 text-lg font-bold text-offwhite">Still have questions?</h2>
            <p className="text-sm text-muted">Get in touch directly or join the community on Telegram.</p>
          </div>
          <LinkButton href="/contact" className="whitespace-nowrap">
            Contact Us
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
