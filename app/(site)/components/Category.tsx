"use client"

import useUIState from "@/hooks/useUIState"
import { homeCategoryList } from "@/lib/dummyData"
import { cn } from "@/lib/utils"
import React from "react"
const Category = () => {
  const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImageSrc } = useUIState()

  const onClickCategory = (item: any) => {
    console.log("🚀 ~ Category ~ homeCategory:", homeCategory)
    if (homeCategory === item.label) {
      setHeaderImageSrc("")
      setHomeCategory("")
    } else {
      setHeaderImageSrc(item.src)
      setHomeCategory(item.label)
    }
  }
  return (
    <ul className="flex flex-row gap-4 max-w-full overflow-x-auto">
      {homeCategoryList.map((data, idx) => {
        return (
          <li
            onClick={() => onClickCategory(data)}
            key={idx}
            className={cn(
              "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
              homeCategory === data.label && "bg-white text-black hover:bg-white"
            )}
          >
            {data.label}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
