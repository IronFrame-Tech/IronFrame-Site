'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'cyan' | 'outline-cyan' | 'teal' | 'outline-teal'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  children: React.ReactNode
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
  secondary:
    'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20',
  ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
  whatsapp:
    'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40',
  cyan: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40',
  'outline-cyan':
    'bg-transparent border border-cyan-500/40 hover:border-cyan-400/70 text-cyan-300 hover:text-cyan-200',
  teal: 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40',
  'outline-teal':
    'bg-transparent border border-teal-500/40 hover:border-teal-400/70 text-teal-300 hover:text-teal-200',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.97]',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const isExternal =
    external ?? (href.startsWith('http') || href.startsWith('https') || href.startsWith('wa.me'))

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
