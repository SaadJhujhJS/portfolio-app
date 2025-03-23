import React from 'react'
import NavbarBtn from './NavbarBtn';

const NavbarLinks = () => {
    const links = [
        { link: "About Me", section: "about" },
        { link: "Skills", section: "skills" },
        { link: "Experience", section: "experience" },
        { link: "Projects", section: "projects" },
        { link: "Contact", section: "contact" },
      ];
  return (
    <div>
        <ul className='flex lg:flex-row min-[200px]:flex-col gap-6 text-white font-body lg:relative absolute top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-lg text-xl bg-orange-400/30 backdrop-blur-lg lg:bg-transparent w-full py-4'>
            {links.map((link,index)=>{
                return(
                    <li key={index} className='group cursor-pointer text-white hover:text-orange-300 transition-all duration-400'>
                        {link.link}
                        <div className="mx-auto bg-orange-400 w-0 group-hover:w-full h-[1px] transition-all duration-400"></div>
                    </li>
                )
            })}
            <div className='block min-[450px]:hidden mx-auto'><NavbarBtn /></div>
        </ul>
    </div>
  )
}

export default NavbarLinks;