import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-3 h-full justify-center md:text-left text-center">
      <h2 className="lg:text-2xl sm:text-xl  uppercase text-gray-500">
        Software Engineer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange-400 font-bold uppercase">
        Saad Ali
      </h1>
      <p className="text-lg mt-4 text-white">
        A passionate web developer proficient in Frontend
        <br />
        JavaScript frameworks React.Js, Next.Js and Vue.Js
      </p>
      <div>
      <button className="px-4 py-2 mt-2 mx-auto md:mx-0 rounded-xl text-xl text-white border flex items-center gap-1 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500  hover:scale-110 hover:border-orange-400 hover:shadow-[0px_0px_20px_0px_rgba(255,165,0,0.5)] cursor-pointer transition-all duration-400">
        Download Cv
        <div className="mt-1">
          <LuArrowDownRight />
        </div>
      </button>
      </div>
    </div>
  );
};

export default HeroText;
