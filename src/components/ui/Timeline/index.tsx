"use client"

import { FC } from "react"
import { TimelineContent } from "./TimelineContent"
import { TimelineTime } from "./TimelineTime"
import { TimelinePoint } from "./TimelinePoint"
import { TimelineTitle } from "./TimelineTitle"
import { TimelineBody } from "./TimelineBody"
import { TimelineItem } from "./TimelineItem"

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineComponent: FC<TimelineProps> = ({ children }) => {
  return <div>{children}</div>
}

TimelineItem.displayName = "Timeline.Item"
TimelinePoint.displayName = "Timeline.Point"
TimelineContent.displayName = "Timeline.Content"
TimelineTime.displayName = "Timeline.Time"
TimelineTitle.displayName = "Timeline.Title"
TimelineBody.displayName = "Timeline.Body"

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody,
})
