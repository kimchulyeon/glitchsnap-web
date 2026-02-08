type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'outline'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-800 text-gray-300 border border-gray-700',
  primary: 'bg-primary-500/10 text-primary-400 border border-primary-500/30',
  success: 'bg-green-500/10 text-green-400 border border-green-500/30',
  warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
  outline: 'bg-transparent border border-gray-600 text-gray-400',
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
