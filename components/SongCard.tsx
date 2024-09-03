"use client";
import IconButton from "@/components/elements/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import { IPlaylist, ISong, ITopSong } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown, FiThumbsUp, FiMoreVertical } from "react-icons/fi";
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
    <article className="flex flex-row items-center gap-4 h-12 w-full relative group">
      <div className="w-12 h-12 relative">
        <Image src={song.imageSrc} alt="" fill className="object-cover" />
        <section className="w-[48px] h-[48px] items-center justify-center absolute top-0 left-0 hidden group-hover:flex bg-black/50 cursor-pointer ">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        {song.prevRank === song.rank ? (
          <FaCircle size={10} />
        ) : song.prevRank > song.rank ? (
          <AiOutlineCaretDown size={10} className="text-green-500" />
        ) : (
          <AiOutlineCaretUp size={10} className="text-red-500" />
        )}
        <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className="absolute inset-0 flex-row justify-end gap-1.5 h-[48px] items-center hidden group-hover:flex w-[80%] bg-black/50">
        <IconButton
          icon={<FiThumbsDown size={20} />}
          onClickIcon={onClickPlay}
          width={20}
          height={20}
        />
        <IconButton
          icon={<FiThumbsUp size={20} />}
          onClickIcon={onClickPlay}
          width={20}
          height={20}
        />
        <IconButton
          icon={<FiMoreVertical size={20} />}
          onClickIcon={onClickPlay}
          width={20}
          height={20}
        />
      </section>
    </article>
  );
};

export default SongCard;
