const tones = {
  blue: 'bg-blue-soft text-blue border border-blue-mid/60',
  muted: 'bg-panel text-muted border border-border',
  red: 'bg-red/10 text-red border border-red/30',
};

export default function Badge({
  tone = 'blue',
  children,
}: {
  tone?: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
