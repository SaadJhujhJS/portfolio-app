import React from "react";

const HeroGradient = () => {
  return (
    <div>
          <div className="w-12 h-12 sm:w-30 sm:h-30 rounded-full bg-gradient-to-r from-orange-400 to-yellow-200 blur-md animate-pulse absolute top-30 sm:top-20 left-10 z-0 opacity-10"></div>
          <div className="w-16 h-16 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-orange-400 to-yellow-200 blur-md animate-pulse absolute top-1/3 sm:top-1/2 left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-0 opacity-10"></div>
          <div className="w-12 h-12 sm:w-30 sm:h-30 rounded-full bg-gradient-to-r from-orange-400 to-yellow-200 blur-md animate-pulse absolute top-30 sm:top-20 right-10 z-0 opacity-10"></div>
    </div>
  );
};

export default HeroGradient;
