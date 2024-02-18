"use client"

import { FC } from "react"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TimelineItem: FC<TimelineItemProps> = ({ children }) => {
  return (
    <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
      <a className="absolute inset-0 z-[1]" href="#" />
      {children}
    </div>
  )
}
