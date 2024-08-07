"use client"
import IconButton from "@/components/elements/IconButton"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"
type Props = {
  isInDrawer?: boolean
  onClickClose?: any
}
const Logo = ({ isInDrawer = false, onClickClose = () => {} }: Props) => {
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

  const hamburgerIcon = <RxHamburgerMenu size={24} />
  const closeIcon = <IoCloseOutline size={30} />
  return (
    <section className="flex flex-row gap-3 items-center">
      {isInDrawer ? (
        <IconButton width={36} height={36} icon={closeIcon} onClickIcon={onClickClose} />
      ) : (
        <IconButton width={36} height={36} icon={hamburgerIcon} onClickIcon={onClickLogo} />
      )}

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src="/main-logo.svg" width={100} height={30} alt="logo" />
      </div>
    </section>
  )
}

export default Logo
