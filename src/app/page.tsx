"use client";

import Spline from "@splinetool/react-spline";

export default function Page() {  
  return (
    <div className="h-full w-full bg-black">
      <div className="relative hidden">
        <div className="h-[12rem] w-full relative bg-red-400">
          <Spline
            className="absolute inset-0 w-full h-full"
            scene="https://prod.spline.design/fMDKTJ-OX2OJ8y7x/scene.splinecode"
          />
          <div className="absolute top-9 left-0 right-0 text-center">
            <h1 className="text-4xl text-red-800">Hello Creator</h1>
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-red-900">Hello Page</h1>
    </div>
  );
}
