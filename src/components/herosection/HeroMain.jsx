import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="w-full pt-40 pb-16">
      <div className="flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between items-center px-4 py-6">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroMain;
