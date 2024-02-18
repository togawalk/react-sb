"use client"

import { FC } from "react"

interface TimelinePointProps extends React.HTMLAttributes<HTMLDivElement> { }

export const TimelinePoint: FC<TimelinePointProps> = () => {
  return (
    <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-muted-foreground group-hover:after:bg-primary">
      <div className="relative z-10 w-7 h-7 flex justify-center items-center">
        <div className="w-2 h-2 rounded-full bg-card border-2 group-hover:border-primary border-muted-foreground" />
      </div>
    </div>
  )
}
