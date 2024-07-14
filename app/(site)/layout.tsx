import Header from "@/components/elements/Header"
import React from "react"

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="h-full w-full">
      <Header>{children}</Header>
    </div>
  )
}

export default layout
