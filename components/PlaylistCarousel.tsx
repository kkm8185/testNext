import React from "react"
import { IPlaylist } from "@/types"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import PlayListCard from "@/components/PlayListCard"
interface PlaylistCarouselProps {
  title: string
  subTitle?: string
  Thumbnail?: React.ReactNode
  playlistArray?: IPlaylist[]
  children?: React.ReactNode
}
const PlaylistCarousel = ({ title, subTitle, Thumbnail, playlistArray, children }: PlaylistCarouselProps) => {
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div>
              <div>{subTitle && <div className="text-neutral-500">{subTitle}</div>}</div>
              <div className="text-[34px] font-bold leading-[34px]">{title}</div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>

        <CarouselContent>
          {playlistArray?.map((playlist, idx) => {
            return (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <PlayListCard playlist={playlist} />
                </div>
              </CarouselItem>
            )
          })}
          {/* {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <PlayListCard />
              </div>
            </CarouselItem>
          ))} */}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default PlaylistCarousel
