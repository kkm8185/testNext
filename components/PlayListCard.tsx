"use client"
import IconButton from "@/components/elements/IconButton"
import { getRandomElementFromArray } from "@/lib/utils"
import { IPlaylist } from "@/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"
import { FiPlay } from "react-icons/fi"
import { MdMoreVert } from "react-icons/md"
type Props = {
  playlist: IPlaylist
}
const PlayListCard = ({ playlist }: Props) => {
  const { push } = useRouter()
  const { id, owner, playlistName, songList } = playlist
  const imageSrc = null || getRandomElementFromArray(songList).imageSrc

  const onClickCard = () => {
    push(`/playlist?list=${id}`)
  }
  const onClickPlay = (e: any) => {
    e.stopPropagation()
    console.log("ggggggggg")
  }
  return (
    <article className="h-[260px] cursor-pointer group">
      <section className="relative h-[136px]" onClick={onClickCard}>
        <Image src={imageSrc} fill alt="thumbnail" className="object-cover" />
        <div className="relative block group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.8)] top-0 w-full h-[136px]">
          <div className="absolute top-2 right-4">
            <IconButton width={36} height={36} icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110
          bg-[rgba(0,0,0,0.7)] w-[36px] h-[36px] rounded-full"
          >
            <IconButton width={36} height={36} icon={<FiPlay size={22} color="red" className="pl-1.5" />} />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div>
          `${owner} - 트랙 ${songList.length}
        </div>
      </section>
    </article>
  )
}

export default PlayListCard
