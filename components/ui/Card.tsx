'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles =
    'bg-card text-card-foreground rounded-2xl border border-border p-6'

  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({
  children,
  className = '',
  as: Component = 'h3',
}: CardTitleProps) {
  return (
    <Component
      className={`text-xl font-semibold text-foreground ${className}`}
    >
      {children}
    </Component>
  )
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({
  children,
  className = '',
}: CardDescriptionProps) {
  return (
    <p className={`text-muted-foreground text-sm mt-1.5 ${className}`}>
      {children}
    </p>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={className}>{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return <div className={`mt-6 pt-4 border-t border-border ${className}`}>{children}</div>
}
