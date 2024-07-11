"use client"
import React, { useMemo } from "react"
import { GoHome } from "react-icons/go"
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi"
import { usePathname } from "next/navigation"
import Link from "next/link"
import IconButton from "@/components/elements/IconButton"
import { cn } from "@/lib/utils"
const Navigator = () => {
  const pathname = usePathname()
  const routes = useMemo(() => {
    return [
      { icon: <GoHome size={24} />, label: "홈", isActive: pathname === "/", href: "/" },
      { icon: <FiCompass size={24} />, label: "둘러보기", isActive: pathname === "/explore", href: "/explore" },
      { icon: <GoHome size={24} />, label: "보관함", isActive: pathname === "/library", href: "/library" },
    ]
  }, [pathname])
  const LinkIcon = (data: any) => (
    <Link href={data.href} className="flex flex-row  items-center gap-5">
      {data.icon}
      <div>{data.label}</div>
    </Link>
  )
  return (
    <div>
      <section>
        <div className="p-4 flex flex-col gap-2">
          {routes.map((data, idx) => {
            return (
              <Link
                key={idx}
                href={data.href}
                className={cn("p-2 flex flex-row  items-center gap-5 hover:bg-neutral-700 rounded-lg", data.isActive && "bg-neutral-700")}
              >
                {data.icon}
                <div>{data.label}</div>
              </Link>
            )
          })}
        </div>
      </section>
      <section className="px-6">
        <div className="border"></div>
      </section>
      <section className="px-6">
        <div className="hover:bg-neutral-600 cursor-pointer flex flex-row gap-2 my-6 justify-center items-center bg-neutral-700 rounded-2xl p-2 font-thin">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
    </div>
  )
}

export default Navigator
