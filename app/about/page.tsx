import { LinkButton } from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import { siteConfig } from '@/lib/data';

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: 'The philosophy and people behind TRAXXIO — The Art of Trading.',
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-site">
          <SectionLabel>About TRAXXIO</SectionLabel>
          <h1 className="max-w-[680px] text-[clamp(36px,6vw,64px)] font-bold leading-[1.05] tracking-tight text-offwhite">
            Trading is not just a skill. It&apos;s a craft.
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-muted">
            TRAXXIO was built on a simple belief: consistency comes from discipline, not certainty. We build tools,
            run mentorship, and gather a community around that one idea — for traders who treat the markets as a
            craft worth mastering, not a shortcut worth chasing.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-border px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-site">
          <SectionLabel>Our Philosophy</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[16px] border border-border bg-panel p-7">
              <h3 className="mb-2 text-xl font-bold text-offwhite">Discipline as intelligence</h3>
              <p className="text-[13.5px] leading-relaxed text-muted">
                The most profitable trade is often the one you didn&apos;t take. We treat discipline as a skill to be
                trained, measured, and improved — not a vague aspiration.
              </p>
            </div>
            <div className="rounded-[16px] border border-border bg-panel p-7">
              <h3 className="mb-2 text-xl font-bold text-offwhite">Probabilities, not certainty</h3>
              <p className="text-[13.5px] leading-relaxed text-muted">
                Every edge is a probability, not a promise. We teach traders to size, manage risk, and think in
                distributions of outcomes rather than predictions.
              </p>
            </div>
            <div className="rounded-[16px] border border-border bg-panel p-7">
              <h3 className="mb-2 text-xl font-bold text-offwhite">Process over outcome</h3>
              <p className="text-[13.5px] leading-relaxed text-muted">
                A good trade can lose money. A bad trade can win. We judge behavior and process — not a single
                outcome — because that&apos;s what compounds over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VOICE / WE ARE - WE ARE NOT */}
      <section className="border-b border-border bg-panel px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-site">
          <SectionLabel>How We Show Up</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[16px] border border-blue-mid/40 bg-black p-8">
              <div className="eyebrow mb-5">We Are</div>
              <ul className="flex flex-col gap-3">
                {['Sharp & direct', 'Confident, not arrogant', 'Knowledgeable', 'Premium & serious', 'Community-driven'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-offwhite">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="rounded-[16px] border border-border bg-black p-8">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">We Are Not</div>
              <ul className="flex flex-col gap-3">
                {['Hype-driven or salesy', 'Casual or sloppy', 'Overpromising', 'Generic or templated', 'Loud without substance'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[560px]">
          <h2 className="mb-4 text-[clamp(26px,4vw,38px)] font-bold leading-tight text-offwhite">
            Ready to trade with discipline?
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-muted">
            Join 500+ traders building consistency through TRAXXIO&apos;s tools, mentorship, and community.
          </p>
          <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <LinkButton href="/products">Explore Products</LinkButton>
            <LinkButton href={siteConfig.telegram} variant="outline">
              Join the Community
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
