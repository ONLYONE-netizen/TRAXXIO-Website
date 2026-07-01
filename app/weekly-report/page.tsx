import SectionLabel from '@/components/SectionLabel';
import { weeklyReports, siteConfig } from '@/lib/data';

export const metadata = {
  title: `Weekly Report | ${siteConfig.name}`,
  description: 'Market insights, trader highlights, and TX Agora updates — updated every Monday.',
};

export default function WeeklyReportPage() {
  const [latest, ...older] = weeklyReports;

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[760px]">
        <SectionLabel>Weekly Report</SectionLabel>
        <h1 className="mb-3 text-[clamp(32px,5vw,52px)] font-bold leading-tight text-offwhite">Weekly Report</h1>
        <p className="mb-12 max-w-[480px] text-[15px] text-muted">
          Market insights, trader highlights, and TX Agora updates. Updated every Monday.
        </p>

        {latest && (
          <div className="rounded-[16px] border border-border bg-panel p-7">
            <div className="eyebrow mb-3">{latest.date}</div>
            <h2 className="mb-3 text-xl font-bold text-offwhite">{latest.title}</h2>
            <p className="mb-5 text-[14px] leading-relaxed text-muted">{latest.summary}</p>
            <ul className="space-y-2">
              {latest.highlights.map((item, i) => (
                <li key={i} className="flex gap-2 text-[14px] text-muted">
                  <span className="text-blue">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {older.length > 0 && (
          <div className="mt-10 space-y-5">
            <h3 className="text-lg font-bold text-offwhite">Past Reports</h3>
            {older.map((report) => (
              <div key={report.id} className="rounded-[16px] border border-border bg-panel p-7">
                <div className="eyebrow mb-3">{report.date}</div>
                <h4 className="mb-2 text-lg font-bold text-offwhite">{report.title}</h4>
                <p className="text-[14px] leading-relaxed text-muted">{report.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
