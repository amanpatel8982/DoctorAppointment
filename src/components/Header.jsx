import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-warp '>
        <div>
          <p>
            Book Appointment <br /> With Trusted Doctors
          </p>

          <div>
            <img src={assets.group_profiles} alt="" />
            <p>Simply brower through our extensive list of trusted doctors, <br /> schedule your appointment hasssle-free </p>
          </div>
          
          <a href="">
            Book appointment <img src={assets.arrow_icon} alt="" />
          </a>
        
        </div>

    
        <div>
            <img src={assets.header_img} alt="" />

        </div>
        
    </div>
  )
}

export default Header