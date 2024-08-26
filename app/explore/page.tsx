import Category from "@/app/explore/components/Category";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import { getAllPlaylist } from "@/lib/dummyData";
import React from "react";

const page = async () => {
  const playlistArray = await getAllPlaylist();
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
      </div>
    </PagePadding>
  );
};

export default page;
