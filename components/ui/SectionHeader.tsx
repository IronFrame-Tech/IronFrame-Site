import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  labelColor?: 'blue' | 'cyan' | 'teal' | 'purple'
}

const labelColors = {
  blue: 'text-blue-400',
  cyan: 'text-cyan-400',
  teal: 'text-teal-400',
  purple: 'text-purple-400',
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered,
  className,
  labelColor = 'blue',
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && (
        <p
          className={cn(
            'text-xs font-bold uppercase tracking-widest mb-3 font-display',
            labelColors[labelColor]
          )}
        >
          {label}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl text-white font-extrabold mb-4"
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }}
      />
      {subtitle && (
        <p className={cn('text-slate-400 text-lg leading-relaxed', centered && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
