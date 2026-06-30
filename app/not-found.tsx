import { LinkButton } from '@/components/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center px-5 py-24 text-center">
      <div className="eyebrow mb-4">404</div>
      <h1 className="mb-4 text-[clamp(32px,6vw,56px)] font-bold leading-tight text-offwhite">Page not found.</h1>
      <p className="mb-8 max-w-[420px] text-sm leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <LinkButton href="/">Back to Home</LinkButton>
    </section>
  );
}
