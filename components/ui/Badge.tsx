import { cn } from '@/lib/utils'

type Color = 'blue' | 'cyan' | 'teal' | 'green' | 'purple' | 'slate'

interface BadgeProps {
  children: React.ReactNode
  color?: Color
  className?: string
}

const colorClasses: Record<Color, string> = {
  blue: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
  teal: 'bg-teal-500/10 text-teal-300 border border-teal-500/20',
  green: 'bg-green-500/10 text-green-300 border border-green-500/20',
  purple: 'bg-purple-500/10 text-purple-300 border border-purple-500/20',
  slate: 'bg-white/5 text-slate-300 border border-white/10',
}

export function Badge({ children, color = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  )
}
