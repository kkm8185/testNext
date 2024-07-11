"use client"
import IconButton from "@/components/elements/IconButton"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
const Logo = () => {
  const { push } = useRouter()
  const [isClicked, setIsClicked] = useState(false)

  const handleMouseDown = () => {
    setIsClicked(true)
  }

  const handleMouseUp = () => {
    setIsClicked(false)
  }
  const onClickLogo = () => {
    push("/")
  }
  const logoIcon = <RxHamburgerMenu size={24} />
  return (
    <section className="flex flex-row gap-3 items-center">
      <IconButton width={36} height={36} icon={logoIcon} onClickIcon={onClickLogo} />

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src="/main-logo.svg" width={100} height={30} alt="logo" />
      </div>
    </section>
  )
}

export default Logo
