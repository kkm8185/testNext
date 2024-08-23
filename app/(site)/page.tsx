import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];
  const dummyPlaylistArray5 = [await getPlaylistById(4)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9">
          <Category />
          <div className="mt-12">
            <PlaylistCarousel
              playlistArray={[...dummyPlaylistArray1]}
              title="다시 듣기"
              subTitle="도도"
              Thumbnail={
                <div className=" w-[56px] h-[56px]">
                  <UserIcon size="lg" />
                </div>
              }
            />
          </div>
          <div className="mt-12">
            <PlaylistCarousel
              playlistArray={[...dummyPlaylistArray2]}
              title="케이시 - Full Bloom"
              subTitle="새로운 앨범"
            />
          </div>
          <div className="mt-12">
            <PlaylistCarousel playlistArray={[...dummyPlaylistArray3]} title="커뮤니티 제공" />
          </div>
          <div className="mt-12">
            <PlaylistCarousel playlistArray={[...dummyPlaylistArray4]} title="커버 및 리믹스" />
          </div>
        </div>
      </div>
    </PagePadding>
  );
};

export default page;
