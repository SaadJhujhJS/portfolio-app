import React from 'react';

const SubHeroSection = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-6 bg-gradient-to-r from-orange-500 to-yellow-500">
      <div
        className="flex justify-around gap-8 text-white uppercase text-4xl sm:text-2xl xl:text-4xl animate-marquee"
      >
        <p className="hidden sm:block">Fast Learner</p>
        <p className="hidden sm:block">Team Work</p>
        <p>Details Master</p>
      </div>
    </div>
  );
};

export default SubHeroSection;
