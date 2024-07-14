import React from "react"
import Image from "next/image"
import UserIcon from "@/components/UserIcon"
import PagePadding from "@/components/PagePadding"
import { FaChromecast } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"

const HeaderDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full"></DrawerContent>
    </Drawer>
  )
}
const Header = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <header className="relative w-full h-full overflow-y-auto">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image alt="mediaItem" className="object-cover" fill src={"https://images.unsplash.com/photo-1707833558984-3293e794031c"} />
        </div>
        <div className="w-full h-[400px] bg-black opacity-40 absolute top-0" />
        <div className="w-full h-[400px] bg-gradient-to-t from-black  absolute top-0" />
      </section>
      <section className="sticky">
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between">
            <article className="flex flex-row gap-4 bg-[rgba(0,0,0,0.14)] h-[42px] min-w-[480px] rounded-2xl items-center px-[16px] ">
              <FiSearch size={20} />
              <input type="text" className="h-full w-full bg-transparent" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" />
            </article>
            <HeaderDrawer />
            <div className="flex flex-row gap-2 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </div>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  )
}

export default Header
