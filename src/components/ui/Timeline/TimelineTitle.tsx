"use client"

import { FC } from "react"

interface TimelineTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TimelineTitle: FC<TimelineTitleProps> = ({ children }) => {
  return (
    <h3 className="font-semibold text-gray-800 dark:text-white">{children}</h3>
  )
}
