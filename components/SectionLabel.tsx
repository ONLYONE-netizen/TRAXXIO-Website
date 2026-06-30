export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="eyebrow">{children}</span>
      <div className="section-divider" />
    </div>
  );
}
