import useEmblaCarousel from "embla-carousel-react";
import "./gallery.css";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

// import EmblaCarousel from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div
      ref={emblaRef}
      className="embla bg-black h-[100vh] max-h-[100%] lg:py-16 "
    >
      <div className="flex lg:mx-11 lg:flex-row gap-6 ">
        <div className="embla__slide slider1 relative ">
          <div className="absolute lg:top-[28rem] bottom-[22rem] lg:left-12  sm:bottom-[15rem] left-2 text-sm">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              Christina Demertzi
            </h1>
            <p className="text-1xl text-white mb-4">
              Am a passionate photographer from Germany.
            </p>
            <button className="px-12 py-4 bg-black text-white   rounded-full">
              <Link to={"/Gallery"}> View Case</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide slider2 relative ">
          <div className="absolute lg:top-[28rem] bottom-[22rem] lg:left-12  sm:bottom-[15rem] left-2 text-sm">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              Sunny side up
            </h1>
            <p className="text-1xl text-white mb-4">
              A description will be here
            </p>
            <button className="lg:px-12 sm:px-12 px-6 py-4 bg-black text-white   rounded-full">
              <Link to={"/Gallery"}> View Case</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide slider3 relative ">
          <div className="absolute lg:top-[28rem] bottom-[22rem] lg:left-12  sm:bottom-[15rem] left-2 text-sm">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              A wonderful Life
            </h1>
            <p className="text-1xl text-white ">A description will be here</p>
            <button className="px-12 py-4 bg-black text-white   rounded-full">
              <Link to={"/Gallery"}> View Case</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide slider4 relative ">
          <div className="absolute lg:top-[28rem] bottom-[22rem] lg:left-12  sm:bottom-[15rem] left-2 text-sm">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              The other side of me
            </h1>
            <p className="text-1xl text-white ">A description will be here</p>
            <button className="px-12 py-4 bg-black text-white   rounded-full">
              <Link to={"/Gallery"}> View Case</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide slider5 relative ">
          <div className="absolute lg:top-[28rem] bottom-[22rem] lg:left-12  sm:bottom-[15rem] left-2 text-sm">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              The other side of me
            </h1>
            <p className="text-1xl text-white ">A description will be here</p>
            <button className="px-12 py-4 bg-black text-white   rounded-full">
              <Link to={"/Gallery"}> View Case</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide slider6 relative ">
          <div className="absolute lg:top-[28rem] bottom-[22rem] lg:left-12  sm:bottom-[15rem] left-2 text-sm">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              The other side of me
            </h1>
            <p className="text-1xl text-white ">A description will be here</p>
            <button className="px-12 py-4 bg-black text-white   rounded-full">
              <Link to={"/Gallery"}> View Case</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
