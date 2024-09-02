import React from 'react'
import TotopImage from "../../assets/totop.png"
import './social.css';

const ToTop = () => {
  return (
    <div className='to-top-button'>
        <img onClick={()=>window.scrollTo(0, 0)} src={TotopImage} style={{ width: '36px', height: '36px' }} />
    </div>
  )
}

export default ToTop