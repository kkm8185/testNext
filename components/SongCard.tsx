"use client";
import IconButton from "@/components/elements/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import { IPlaylist, ISong, ITopSong } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
type Props = {
  song: ITopSong;
};

const defaultSong: ITopSong = {
  name: "",
  channelId: 0,
  channel: "",
  src: "",
  imageSrc: "",
  prevRank: 0,
  rank: 0,
};
const SongCard = ({ song = defaultSong }: Props) => {
  const { push } = useRouter();

  const onClickPlay = (e: any) => {
    e.stopPropagation();
    console.log("ggggggggg");
  };
  return (
    <article className="flex flex-row gap-4 h-12 w-[400px]">
      <div className="w-12 h-12 relative">
        <Image src={song.imageSrc} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-row gap-4">
        {song.prevRank === song.rank ? (
          <FaCircle size={8} />
        ) : song.prevRank > song.rank ? (
          <AiOutlineCaretDown className="text-green-500" />
        ) : (
          <AiOutlineCaretUp className="text-red-500" />
        )}
      </div>
      <div>{song.prevRank}</div>
      <div>{song.rank}</div>
    </article>
  );
};

export default SongCard;
