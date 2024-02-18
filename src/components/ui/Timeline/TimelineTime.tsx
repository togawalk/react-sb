"use client"

import { FC } from "react"

interface TimelineTimeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TimelineTime: FC<TimelineTimeProps> = ({ children }) => {
  return (
    <div className="ps-2 my-2 first:mt-0">
      <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
        {children}
      </h3>
    </div>
  )
}
