import { cn } from "@/lib/utils"
import classNames from "classnames"
import React, { MouseEventHandler, ReactNode, useState } from "react"
type Props = {
  icon: ReactNode
  onClickIcon?: MouseEventHandler<HTMLDivElement>
  width: number
  height: number
  align?: string
}
const IconButton = ({ icon, onClickIcon = () => {}, width, height, align = "center" }: Props) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMouseDown = () => {
    setIsClicked(true)
  }

  const handleMouseUp = () => {
    setIsClicked(false)
  }
  const clonedIcon = React.cloneElement(icon as React.ReactElement, {
    className: classNames((icon as React.ReactElement).props.className, isClicked ? "scale-90" : "scale-100"),
  })

  return (
    <div
      className={cn(
        "transform transition-transform duration-150",
        "flex items-center cursor-pointer hover:bg-[rgba(144,144,144,0.45)] rounded-full",
        align === "center" ? "justify-center" : `justify-${align}`
      )}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={onClickIcon}
    >
      {clonedIcon}
    </div>
  )
}

export default IconButton
