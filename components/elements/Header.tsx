"use client"
import React, { Children, useEffect, useReducer, useRef, useState } from "react"
import Image from "next/image"
import UserIcon from "@/components/UserIcon"
import PagePadding from "@/components/PagePadding"
import { FaChromecast } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import Logo from "@/components/elements/Logo"
import Navigator from "@/components/elements/Navigator"
import { cn } from "@/lib/utils"
import useUIState from "@/hooks/useUIState"

const HeaderDrawer = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고, 네비게이션 추가필요 */}
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer
              onClickClose={() => {
                setIsOpen(false)
              }}
            />
            <Navigator />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
const Header = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const headRef = useRef<HTMLElement | null>(null)
  const { homeCategory, headerImageSrc } = useUIState()

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop
      console.log("🚀 ~ handleScroll ~ scrollValue:", scrollValue)
      setIsScrolled(scrollValue !== 0)
    }
    if (headRef?.current) {
      headRef.current.addEventListener("scroll", handleScroll)
    }
    return () => {
      headRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header className="relative w-full h-full overflow-y-auto" ref={headRef}>
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src={headerImageSrc || "https://images.unsplash.com/photo-1707833558984-3293e794031c"}
          />
        </div>
        <div className="w-full h-[400px] bg-black opacity-40 absolute top-0" />
        <div className="w-full h-[400px] bg-gradient-to-t from-black  absolute top-0" />
      </section>
      <section className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between">
            <article className="hidden lg:flex flex-row gap-4 bg-[rgba(0,0,0,0.14)] h-[42px] min-w-[480px] rounded-2xl items-center px-[16px] border border-neutral-500">
              <FiSearch size={20} />
              <input type="text" className="h-full w-full bg-transparent " placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
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
