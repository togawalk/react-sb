"use client"

import { FC } from "react"

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TimelineContent: FC<TimelineContentProps> = ({ children }) => {
  return <div className="grow p-2 pb-8">{children}</div>
}
