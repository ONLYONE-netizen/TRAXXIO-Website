import SectionLabel from '@/components/SectionLabel';
import EventsTabs from '@/components/EventsTabs';
import { events, siteConfig } from '@/lib/data';

export const metadata = {
  title: `Events | ${siteConfig.name}`,
  description: 'Live sessions, upcoming programs, and past milestones from the TRAXXIO community.',
};

export default function EventsPage() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-site">
        <SectionLabel>Events &amp; Community</SectionLabel>
        <h1 className="mb-3 text-[clamp(32px,5vw,52px)] font-bold leading-tight text-offwhite">What&apos;s Happening</h1>
        <p className="mb-12 max-w-[480px] text-[15px] text-muted">
          Live sessions, upcoming programs, and past milestones from the TRAXXIO community.
        </p>

        <EventsTabs events={events} />
      </div>
    </section>
  );
}
