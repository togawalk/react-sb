import { Children, ReactNode } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { cn } from '@/lib/utils'

interface BreadcrumbsProps {
  children?: ReactNode[]
  separator?: ReactNode
  classes?: {
    separator?: string
    ol?: string
  }
}

interface BreadcrumbsSeparatorProps {
  separator?: ReactNode
  className?: string
}

export const Breadcrumbs = ({
  children,
  separator,
  classes,
}: BreadcrumbsProps) => {
  const allItems = Children.toArray(children)
  return (
    <ol
      className={cn(
        'flex items-center whitespace-nowrap font-semibold',
        classes?.ol
      )}
      aria-label='Breadcrumb'
    >
      {insertSeparators(allItems, separator, classes?.separator)}
    </ol>
  )
}

const BreadcrumbsSeparator = ({
  separator,
  className,
}: BreadcrumbsSeparatorProps) => {
  return (
    <div className={cn('mx-2 text-muted-foreground', className)}>
      {separator ? separator : <FiChevronRight />}
    </div>
  )
}

function insertSeparators(
  items: ReactNode[],
  separator: ReactNode,
  className?: string
) {
  return items.reduce((acc: ReactNode[], current: ReactNode, index: number) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <BreadcrumbsSeparator
          separator={separator}
          key={index}
          className={className}
        />
      )
    } else {
      acc.push(current)
    }

    return acc
  }, [])
}
