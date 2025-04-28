import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [openMenu, setOpenMenu] = useState(true);
  console.log(openMenu);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  return (
    <div className="pt-2 max-w-[1300px] w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 bg-[#14213d]">
      <nav className="flex gap-4">
      <div className="flex justify-between items-center mx-auto w-full max-w-[1200px] px-5 py-3 border-y-[0.5px] border-orange-500">
        <NavbarLogo />
        <div className={`${openMenu ? "hidden" : "block"} lg:block`}>
          <NavbarLinks />
        </div>
        <div className="flex items-center justify-center">
          <div className="hidden min-[450px]:block"><NavbarBtn /></div>
          <div className="text-4xl flex lg:hidden items-center justify-center">
            <button
              className="p-3 text-white cursor-pointer"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavbarMain;
