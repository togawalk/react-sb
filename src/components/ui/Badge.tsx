import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ring-2 ring-inset',
  {
    variants: {
      variant: {
        default: 'bg-card text-primary ring-border',
        destructive: 'bg-destructive/20 text-red-300 ring-destructive/50',
        warning: 'bg-warning/20 text-yellow-300 ring-warning/50',
        success: 'bg-warning/20 text-yellow-300 ring-warning/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props} />
  )
}

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
