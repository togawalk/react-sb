"use client"

import { FC } from "react"

interface TimelinePointProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TimelinePoint: FC<TimelinePointProps> = () => {
  return (
    <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
      <div className="relative z-10 w-7 h-7 flex justify-center items-center">
        <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600" />
      </div>
    </div>
  )
}
