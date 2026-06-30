import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-[10px] px-7 py-3 text-sm font-medium tracking-wide transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-blue text-white hover:bg-blue-mid',
  outline:
    'bg-transparent border border-border text-muted hover:border-blue hover:text-blue hover:bg-blue-soft',
  ghost: 'bg-transparent text-offwhite hover:text-blue',
};

type Variant = keyof typeof variants;

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  full?: boolean;
}

export function LinkButton({ href, variant = 'primary', full, className = '', children, ...rest }: LinkButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  const classes = `${base} ${variants[variant]} ${full ? 'w-full' : ''} ${className}`;
  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  full?: boolean;
}

export function Button({ variant = 'primary', full, className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${full ? 'w-full' : ''} ${className}`} {...rest}>
      {children}
    </button>
  );
}
