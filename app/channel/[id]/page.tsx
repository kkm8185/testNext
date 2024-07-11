import React from "react"

const page = (props: any) => {
  console.log("🚀 ~ page22 ~ props:", props)

  return <div>channel22/[{props.params.id}]</div>
}

export default page
