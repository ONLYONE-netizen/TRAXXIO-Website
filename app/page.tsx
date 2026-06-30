import { LinkButton } from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import Badge from '@/components/Badge';
import { stats, products, events, siteConfig } from '@/lib/data';

export default function HomePage() {
  const featuredProduct = products.find((p) => p.featured) ?? products[0];
  const liveEvent = events.find((e) => e.status === 'ongoing');

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[calc(100vh-60px)] items-center overflow-hidden px-5 py-16 sm:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(10,110,255,0.10) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto w-full max-w-site">
          <div className="max-w-[680px]">
            <div className="mb-8 inline-flex animate-fadeUp items-center gap-2 rounded-full border border-blue-mid/50 bg-blue-soft px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-blue">
              <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse2 rounded-full bg-blue" />
              The Art of Trading
            </div>

            <h1 className="animate-fadeUp text-[clamp(44px,8vw,84px)] font-bold leading-[0.97] tracking-tight text-offwhite [animation-delay:0.1s]">
              Where Ambition
              <br />
              Meets Mastery.
            </h1>

            <p className="mt-5 max-w-[520px] animate-fadeUp text-[17px] leading-relaxed text-muted [animation-delay:0.2s]">
              Every loss is a lesson. Every win, a milestone. Master the craft with premium tools and elite mentorship.
            </p>

            <div className="mt-10 flex animate-fadeUp flex-col gap-3.5 sm:flex-row [animation-delay:0.3s]">
              <LinkButton href="/products">Explore Products</LinkButton>
              <LinkButton href={siteConfig.weeklyReport} variant="outline">
                View Weekly Report
              </LinkButton>
            </div>

            <div className="mt-16 grid animate-fadeUp grid-cols-2 gap-4 sm:grid-cols-4 [animation-delay:0.4s]">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[14px] border border-border bg-panel p-5">
                  <div className="text-[38px] font-bold leading-none text-blue">{s.num}</div>
                  <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-t border-border px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-site">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mb-12 max-w-[520px] text-[clamp(28px,4vw,42px)] font-bold leading-tight text-offwhite">
            Tools, mentorship, and a community built on discipline.
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[16px] border border-border bg-panel p-7">
              <div className="eyebrow mb-4">Education</div>
              <h3 className="mb-2 text-xl font-bold text-offwhite">Premium Tools</h3>
              <p className="mb-5 text-[13.5px] leading-relaxed text-muted">
                The TRAXXIO Ebook, VERDICT's AI discipline engine, and more — built for traders who want a real edge.
              </p>
              <LinkButton href="/products" variant="ghost" className="px-0">
                View Products →
              </LinkButton>
            </div>

            <div className="rounded-[16px] border border-border bg-panel p-7">
              <div className="eyebrow mb-4">Mentorship</div>
              <h3 className="mb-2 text-xl font-bold text-offwhite">Live Sessions</h3>
              <p className="mb-5 text-[13.5px] leading-relaxed text-muted">
                Weekly live trading sessions, 1-on-1 calls, and trade reviews from people who've done the work.
              </p>
              <LinkButton href="/events" variant="ghost" className="px-0">
                See Events →
              </LinkButton>
            </div>

            <div className="rounded-[16px] border border-border bg-panel p-7">
              <div className="eyebrow mb-4">Community</div>
              <h3 className="mb-2 text-xl font-bold text-offwhite">500+ Traders</h3>
              <p className="mb-5 text-[13.5px] leading-relaxed text-muted">
                A 24/7 community of serious traders, sharp and direct, with no hype and no shortcuts.
              </p>
              <LinkButton href={siteConfig.telegram} variant="ghost" className="px-0">
                Join Telegram →
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT + LIVE EVENT */}
      <section className="border-t border-border bg-panel px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-site gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[18px] border border-blue-mid/40 bg-black p-8">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-blue" />
            <Badge tone={featuredProduct.badgeTone}>{featuredProduct.badge}</Badge>
            <h3 className="mb-1.5 mt-3.5 text-[26px] font-bold text-offwhite">{featuredProduct.name}</h3>
            <p className="mb-6 text-[13.5px] leading-relaxed text-muted">{featuredProduct.desc}</p>
            <LinkButton href="/products">View All Products</LinkButton>
          </div>

          {liveEvent && (
            <div className="rounded-[18px] border border-border bg-black p-8">
              <Badge tone="blue">Ongoing</Badge>
              <h3 className="mb-1.5 mt-3.5 text-[26px] font-bold text-offwhite">{liveEvent.title}</h3>
              <p className="mb-6 font-mono text-[12px] leading-relaxed text-muted">{liveEvent.meta}</p>
              <LinkButton href="/events" variant="outline">
                See All Events
              </LinkButton>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-site flex-col items-center gap-6 rounded-[20px] border border-border bg-panel p-10 text-center sm:p-14">
          <h2 className="max-w-[480px] text-[clamp(26px,4vw,38px)] font-bold leading-tight text-offwhite">
            Get trading insight straight to your inbox.
          </h2>
          <p className="max-w-[440px] text-sm leading-relaxed text-muted">
            No spam. Just signal — mentorship drops, product launches, and market updates.
          </p>
          <LinkButton href="/contact">Subscribe to the Newsletter</LinkButton>
        </div>
      </section>
    </>
  );
}
