import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
  glowCyan?: boolean
}

export function Card({ children, className, glow, glowCyan }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[#0d1a2e] border border-white/5 rounded-2xl p-6',
        glow && 'border-blue-500/20 shadow-lg shadow-blue-500/5',
        glowCyan && 'border-cyan-500/20 shadow-lg shadow-cyan-500/5',
        className
      )}
    >
      {children}
    </div>
  )
}
