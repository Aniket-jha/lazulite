import React from 'react'
import WhatshappImage from "../../assets/whatshapp.png"
import MailImage from "../../assets/message.png"
import LocationImage from "../../assets/location.png"
import CallImage from "../../assets/call.png"
const FixedSocial = () => {
  return (
    <div className='fixed z-[999] pl-6 flex items-center justify-center flex-col gap-3 top-[70%]' >
        <img src={WhatshappImage}/>
        <img src={MailImage} />
        <img src={LocationImage} />
        <img src={CallImage} />
    </div>
  )
}

export default FixedSocial