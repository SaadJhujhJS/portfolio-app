import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import Typewriter from "react-typewriter-effect";

const HeroText = () => {
  return (
    <div className="w-full sm:w-3/5 flex flex-col gap-3 h-full justify-center md:text-left text-center">
      <h2 className="lg:text-2xl sm:text-xl  uppercase text-gray-500">
        Software Engineer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-5xl text-3xl text-orange-400 font-bold uppercase">
        <div className="w-full flex justify-center md:justify-start">
          <Typewriter
            startDelay={100}
            cursorColor="transparent"
            multiText={["Hello,", "This is Saad Ali"]}
            multiTextDelay={1000}
            typeSpeed={90}
            deleteSpeed={80}
            multiTextLoop={true}
          />
        </div>
      </h1>
      <p className="text-lg mt-4 text-white">
        A passionate web developer proficient in Frontend
        <br />
        JavaScript frameworks React.Js, Next.Js and Vue.Js
      </p>
      <div>
        <a
          href="/downloadcv/SaadCv.pdf"
          download
          className="px-4 py-2 mt-2 mx-auto md:mx-0 rounded-xl text-xl text-white border inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500  hover:scale-110 hover:border-orange-400 hover:shadow-[0px_0px_20px_0px_rgba(255,165,0,0.5)] cursor-pointer transition-all duration-400"
        >
          Download Cv
          <div className="mt-1">
            <LuArrowDownRight />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroText;
