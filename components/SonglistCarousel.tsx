import React from "react";
import { ITopSong } from "@/types";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "@/components/PlayListCard";
import SongListCard from "./SongCard";
import { chunkArray } from "@/lib/utils";
import SongCard from "./SongCard";
interface SonglistCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10: ITopSong[];
  children?: React.ReactNode;
}
const SongColumn = ({ songList = [] }: { songList: ITopSong[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {songList.map((data, idx) => {
        return <SongCard key={idx} song={data} />;
      })}
    </div>
  );
};
const SonglistCarousel = ({
  title,
  subTitle,
  Thumbnail,
  songListTop10,
  children,
}: SonglistCarouselProps) => {
  const chunkedTop10SongList = chunkArray(songListTop10, 4);
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div>
              <div>
                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>

        <CarouselContent className="mt-4">
          {chunkedTop10SongList?.map((songlist, idx) => {
            return (
              <CarouselItem
                key={idx}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-1">
                  <SongColumn songList={songlist} />
                </div>
              </CarouselItem>
            );
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
  );
};

export default SonglistCarousel;
