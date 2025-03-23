import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
const NavbarBtn = () => {
  return (
    <div>
        <button className='max-[450px]:px-12 px-4 py-2 rounded-full text-xl text-white border flex items-center gap-1 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500  hover:scale-110 hover:border-orange-400 hover:shadow-[0px_0px_20px_0px_rgba(255,165,0,0.5)] cursor-pointer transition-all duration-400'>
            Hire Me
            <div className='mt-1'>
            <LuArrowDownRight />
            </div>
        </button>
    </div>
  )
}

export default NavbarBtn;