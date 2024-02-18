"use client"

import { FC } from "react"

interface TimelineBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TimelineBody: FC<TimelineBodyProps> = ({ children }) => {
  return (
    <div className="mt-1 text-sm text-secondary-foreground">
      {children}
    </div>
  )
}
