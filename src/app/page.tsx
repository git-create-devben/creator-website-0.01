"use client";

import Hero from "@/Hero";
// import Spline from "@splinetool/react-spline";

export default function Page() {
  return (
    <div className="h-full w-full bg-black">
      <div className="relative hidden">
        <div className="h-[12rem] w-full relative bg-red-400">
          <Hero />
          <div className="absolute top-9 left-0 right-0 text-center">
            <h1 className="text-4xl text-red-800">Hello Creator</h1>
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-red-900">Hello Page</h1>
    </div>
  );
}
