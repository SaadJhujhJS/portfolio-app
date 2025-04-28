import React from "react";
import { LuOctagon } from "react-icons/lu";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center w-full sm:w-2/5 h-[300px] sm:h-[400px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center -z-10 animate-pulse">
        <LuOctagon className="text-orange-400 blur-md animate-[spin_20s_linear_infinite] w-[250px] h-[250px] sm:w-[360px] sm:h-[370px]" />
      </div>

      <img
        src="/images/portfolio-icon.png"
        alt="Web Developer"
        className="z-10 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] object-contain"
      />
    </div>
  );
};

export default HeroImage;
