import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-warp bg-indigo-500 rounded-lg px-6 md:px-10 lg:px'>
        <div className='md:w-1/2 flex flex-col items-start justify-center py-10 gap-4 m-auto md:py-[10vw] md:mb-[-30px]'>
          <p className='text-white text-3xl md:text-5xl lg:text-5xl font-semibold leading-tight lg:leading-tight'>
            Book Appointment <br /> With Trusted Doctors
          </p>

          <div className='flex flex-col md:flex-row items-center gap-3 text-white  text-sm font-light'> 
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Simply brower through our extensive list of trusted doctors, <br  className='hidden sm:block'/> schedule your appointment hasssle-free </p>
          </div>

          <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ' >
            Book appointment <img  className='w' src={assets.arrow_icon} alt="" />
          </a>  
        </div>

    
        <div className=' relative flex items-center justify-center md:justify-end md:items-end h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden'>
            <img className='w-full md-absolute bottom-0  rounded-lg' src={assets.header_img} alt="" />

        </div>
        
    </div>
  )
}

export default Header