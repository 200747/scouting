import React from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='relative w-full h-[80px] flex justify-between items-center px-4 bg-[#c4c4c4] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '90px' }} />
      </div>
</div>
  )
  }
export default Navbar