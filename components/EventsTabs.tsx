'use client';

import { useState } from 'react';
import Badge from './Badge';
import { LinkButton } from './Button';
import EmailForm from './EmailForm';
import { EventItem, EventStatus } from '@/lib/data';

const tabs: { key: EventStatus; label: string }[] = [
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'ended', label: 'Ended' },
];

const badgeTone: Record<EventStatus, 'blue' | 'muted'> = {
  ongoing: 'blue',
  upcoming: 'blue',
  ended: 'muted',
};

export default function EventsTabs({ events }: { events: EventItem[] }) {
  const [active, setActive] = useState<EventStatus>('ongoing');
  const filtered = events.filter((e) => e.status === active);

  return (
    <div>
      <div className="mb-10 flex w-fit gap-1 rounded-xl border border-border bg-panel p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-lg px-5 py-2 text-[13px] font-medium transition-colors ${
              active === t.key ? 'bg-blue text-white' : 'text-muted hover:text-offwhite'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">Nothing here yet — check back soon.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-[16px] border border-border bg-panel transition-all hover:-translate-y-0.5 hover:border-bordersoft"
            >
              {event.image && (
                <div className="relative h-[180px] w-full bg-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="p-6">
                <Badge tone={badgeTone[event.status]}>{tabs.find((t) => t.key === event.status)?.label}</Badge>
                <h3 className="mb-2 mt-3 text-lg font-bold text-offwhite">{event.title}</h3>
                <p className="font-mono text-[11.5px] leading-relaxed text-muted">{event.meta}</p>

                {event.cta && (
                  <div className="mt-4">
                    <LinkButton href={event.cta.href} className="px-5 py-2.5 text-[13px]">
                      {event.cta.label}
                    </LinkButton>
                  </div>
                )}

                {event.waitlistId && (
                  <div className="mt-4">
                    <EmailForm
                      id={`${event.waitlistId}-email`}
                      source={event.waitlistId}
                      ctaLabel="Notify Me"
                      helperText="Get notified the moment this opens up."
                      successMessage="You are on the list."
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
