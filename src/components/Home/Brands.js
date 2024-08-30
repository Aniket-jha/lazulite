import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import BrandList from './BrandList';
import PepsiImage from "../../assets/Pepsi_Logo-01.png"
import TaiwanImage from "../../assets/Taiwan_Ex-01.png"
import TammImage from "../../assets/Tamm-01.png"
import DigitalImage from "../../assets/digital-dubai-colore.png"
import DubaiImage from "../../assets/Dubai_Munipality-01.png"
import LineImage from "../../assets/Path 507.png"
const Brands = () => {
  const list = [
    {
      image:PepsiImage,
      
    },
    {
      image:TaiwanImage,
      
    },
    {
      image:TammImage,
      
    },
    {
      image:DigitalImage,
      
    },
    {
      image:DubaiImage,
      
    },
  ]
  const imagesOne = list?.slice(0,5)?.map((image) => ({
    id: crypto.randomUUID(),
    image:image.image,
    
  }));
  return (
    <div className=' brandBg relative  text-center' >
        <img className='absolute bottom-[40%]' src={LineImage} />
      <div className='px-64 pt-[300px]'>
      
         <h6 className='flex items-center font-[PoppinsRegular] justify-center text-white gap-2  text-[1.3rem]' ><img className='w-[25px]' src={StarIcon} /> Our Clients<img className='w-[25px]' src={StarIcon} /></h6>
         <h3 className='text-[1.8rem] font-[PoppinsMedium] mt-2 mb-12 text-white' >Loved by <span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '> Industry Leaders </span></h3>
        <BrandList images={imagesOne} speed={20000} />
        </div>
        <img className='absolute bottom-[21.5%]' src={LineImage} />
    </div>
  )
}

export default Brands