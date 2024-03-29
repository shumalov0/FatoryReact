
import React from 'react'
import Logo from '../assets/Icons/Layer_2.svg'
import { Element} from 'react-scroll';

const Footer = () => {
  return (
    <Element name="1" className='  bg-blackColor h-[65px]  py-7' >
        <div className="container mx-auto h-full w-full flex items-center justify-center ">
            <img src={Logo} alt="LogoFooter" />
        </div>
    </Element>
  )
}

export default Footer; 