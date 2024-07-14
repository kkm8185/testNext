"use client"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { IoMdPlayCircle } from "react-icons/io"
const PlaylistNav = ({ playlist }: any) => {
  const { id, owner, playlistName, songList } = playlist
  const [isClicked, setIsClicked] = useState(false)

  const handleMouseDown = () => {
    setIsClicked(true)
  }

  const handleMouseUp = () => {
    setIsClicked(false)
  }
  const onClickPlay = () => {
    console.log("onClickPlay")
  }
  return (
    <li className="flex justify-between hover:bg-neutral-700 mx-3 px-4 rounded-lg h-[56px] items-center group">
      <div className="flex flex-col">
        <div className="text-[14px]">{playlistName}</div>

        <div className="text-[12px] text-neutral-500">{owner}</div>
      </div>

      <div>
        <div
          onClick={onClickPlay}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={cn("hidden", isClicked ? "scale-90" : "scale-100", "cursor-pointer", "group-hover:block")}
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  )
}

export default PlaylistNav
