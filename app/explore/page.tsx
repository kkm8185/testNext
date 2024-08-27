import Category from "@/app/explore/components/Category";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import SonglistCarousel from "@/components/SonglistCarousel";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import React from "react";

const page = async () => {
  const [playlistArray, songListTop10Array] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);
  return (
    <PagePadding>
      <div className="mt-4">
        <Category />
        <div className="mt-12">
          <PlaylistCarousel
            playlistArray={playlistArray}
            title="새 앨범 및 싱글"
          />
        </div>
        <div className="mt-12">
          <SonglistCarousel songListTop10={songListTop10Array} title="인기곡" />
        </div>
      </div>
    </PagePadding>
  );
};

export default page;
