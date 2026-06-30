import Badge from './Badge';
import { LinkButton } from './Button';
import EmailForm from './EmailForm';
import { ProductItem } from '@/lib/data';

export default function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[18px] border bg-panel p-8 transition-all hover:-translate-y-0.5 ${
        product.featured ? 'border-blue-mid/50' : product.closed ? 'border-muted/30' : 'border-border hover:border-bordersoft'
      }`}
    >
      {product.featured && <div className="absolute inset-x-0 top-0 h-[2px] bg-blue" />}
      {product.closed && <div className="absolute inset-x-0 top-0 h-[2px] bg-muted" />}

      <Badge tone={product.badgeTone}>{product.badge}</Badge>
      <div className="mb-1.5 mt-3.5 text-[26px] font-bold text-offwhite">{product.name}</div>
      <div className={product.unknownPrice ? 'mb-1.5 font-mono text-xl text-muted' : 'mb-1.5 text-[40px] font-bold leading-none text-blue'}>
        {product.price}
        {product.priceNote && <span className="ml-1.5 text-sm font-normal text-muted">{product.priceNote}</span>}
      </div>
      <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-muted">{product.desc}</p>

      <ul className="mb-6 flex flex-col gap-2.5">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-muted">
            <span className="mt-1.5 h-[5px] w-[5px] flex-shrink-0 rounded-full bg-blue" />
            {f}
          </li>
        ))}
      </ul>

      {product.notice && (
        <div className="mb-4 rounded-[10px] border border-muted/25 bg-deep p-3.5">
          <p className="text-[13px] leading-relaxed text-muted">{product.notice}</p>
        </div>
      )}

      {product.cta && (
        <LinkButton href={product.cta.href} full>
          {product.cta.label}
        </LinkButton>
      )}

      {product.waitlistId && (
        <EmailForm
          id={`${product.waitlistId}-email`}
          source={product.waitlistId}
          ctaLabel={product.closed ? 'Notify Me' : 'Get Early Access'}
          helperText={product.waitlistCopy}
          successMessage="You are on the early access list."
        />
      )}
    </div>
  );
}
