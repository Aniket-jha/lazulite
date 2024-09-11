import React from 'react'
import CaseImage from "../../assets/case1.png"
import TeamImage from "../../assets/team.webp"
const ImageList = () => {
  return (
    <div className='px-64 py-12 grid grid-cols-4 gap-4 grid-flow-row' >
       <div >
        <img className='h-[300px]' src={CaseImage} />
        </div> 
        <div className='col-span-2 '>
        <img className='h-[300px]' src={TeamImage} />
        </div> 
        <div>
        <img className='h-[300px]' src={CaseImage} />
        </div> 
    </div>
  )
}

export default ImageList