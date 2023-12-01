"use client";

import Spline from "@splinetool/react-spline";
const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-9">
        <h1 className="text-4xl text-red-800 p-11">Hello Creator</h1>
      </div>
      <Spline
        className="hidden"
        scene="https://prod.spline.design/nm5198Fh39lOIZG5/scene.splinecode"
      />
    </div>
  );
};

export default Hero;
