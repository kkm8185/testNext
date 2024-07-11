import React from "react"
import { GridLoader } from "react-spinners"

const ErrorMessage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-20">
      <GridLoader color="red" />
      <div className="text-[50px]">Ooops!</div>
      <div>조금있다 다시 확인해라</div>
    </div>
  )
}

export default ErrorMessage
