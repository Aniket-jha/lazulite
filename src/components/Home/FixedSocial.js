import React from 'react'
import WhatshappImage from "../../assets/wp.png"
import MailImage from "../../assets/emailid.png"
import LocationImage from "../../assets/locc.png"
import CallImage from "../../assets/callcc.png"
import './social.css';
const FixedSocial = () => {
  return (
    <div className='fixed-social-icons' >
        <img src={CallImage}  />
        <img src={LocationImage}  />
        <img src={WhatshappImage} />
        <img src={MailImage} />
        
        
    </div>

  )
}

export default FixedSocial