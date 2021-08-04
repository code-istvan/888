import React from "react"
import pic from "..//images/landing_img.jpg"
import picSmall from "..//images/landing_img_small.jpg"
import Image from "react-bootstrap/Image"

const mainimage = () => {
  return (
    <Image
      id="imagecollapse"
      src={window.innerWidth > 768 ? pic : picSmall}
      alt="Astanga jóga Mysore-ban"
      width="2000"
      fluid
    />
  )
}

export default mainimage
