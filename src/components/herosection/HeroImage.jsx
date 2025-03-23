import React from 'react';
import { LuOctagon } from "react-icons/lu";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center p-4">
      {/* 🔹 Background Octagon (Behind the Image) */}
      <div className="absolute inset-0 mt-10 md:mt-0 flex items-center justify-center -z-10 animate-pulse">
        <LuOctagon className="text-orange-400 blur-md animate-[spin_10s_linear_infinite] overflow-hidden w-[120%] h-[120%] md:w-[90%] md:h-[90%] min-h-[370px]"/>
      </div>
      {/* 🔹 Hero Image (Centered on Top of Octagon) */}
      <img src="/images/hero-image.png" alt="Web Developer" className="max-h-[430px] max-w-[430px] z-10" />
    </div>
  );
};

export default HeroImage;
