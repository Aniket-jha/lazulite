import React from 'react'
import TotopImage from "../../assets/totop.png"
import './social.css';
import { FaArrowUp } from "react-icons/fa";

function Button(props) {
  const className = [
      props.animation,
      ' hover:border-white text-sm border-orange text-white rounded-full overflow-hidden group text-white  bg-[#00f9f950] hover:bg-[#0093DA]  px-2 py-2 border-[1px] border-white '
  ].join(' ');
  
  return (
      <button className={className}>
          <div className='button-children'>
              {props.children}
          </div>
      </button>
  );
}

const ToTop = () => {
  return (
    <div className='to-top-button '>
     
        <Button animation='animate-top-bottom'>
          <FaArrowUp className=' block text-[1.5rem]' /> 
          </Button>
        
    </div>
  )
}

export default ToTop