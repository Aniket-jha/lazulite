import React from 'react'
import TotopImage from "../../assets/totop.png"
const ToTop = () => {
  return (
    <div className='fixed top-[80%] right-3 z-[999]'>
        <img onClick={()=>window.scrollTo(0, 0)} src={TotopImage} />
    </div>
  )
}

export default ToTop