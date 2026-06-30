import SectionLabel from '@/components/SectionLabel';
import ProductCard from '@/components/ProductCard';
import { products, siteConfig } from '@/lib/data';

export const metadata = {
  title: `Products | ${siteConfig.name}`,
  description: 'Premium trading tools built for serious traders — ebook, mentorship, and VERDICT.',
};

export default function ProductsPage() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-site">
        <SectionLabel>Products</SectionLabel>
        <h1 className="mb-3 text-[clamp(32px,5vw,52px)] font-bold leading-tight text-offwhite">Premium Trading Tools</h1>
        <p className="mb-12 max-w-[480px] text-[15px] text-muted">
          Built for serious traders who want a real edge. Signals, mentorship, and AI-powered discipline tools.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
