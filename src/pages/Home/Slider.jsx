import useEmblaCarousel from "embla-carousel-react";
import "./home.css";
// import AutoHeight from "embla-carousel-auto-height";
// import EmblaCarousel from "embla-carousel";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel();


  return (
    <div
      ref={emblaRef}
      className="embla bg-black h-[100vh] max-h-[100%] lg:py-16 "
    >
      <div className="flex mx-11 lg:flex-row gap-6 ">
        <div className="embla__slide slider1 relative opacity-50">
          <div className="absolute lg:top-[32rem] left-12 ">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              Contact Us
            </h1>
            <p className="text-1xl text-white ">
              Explore my visual journey and discover the stories <br /> I have
              captured through my lens.
            </p>
          </div>
        </div>
        <div className="embla__slide slider2 relative opacity-50">
          <div className="absolute lg:top-[32rem] left-12 ">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              Contact Us
            </h1>
            <p className="text-1xl text-white ">
              Explore my visual journey and discover the stories <br /> I have
              captured through my lens.
            </p>
          </div>
        </div>
        <div className="embla__slide slider3 relative opacity-50">
          <div className="absolute lg:top-[32rem] left-12 ">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              Contact Us
            </h1>
            <p className="text-1xl text-white ">
              Explore my visual journey and discover the stories <br /> I have
              captured through my lens.
            </p>
          </div>
        </div>
        <div className="embla__slide slider4 relative opacity-50">
          <div className="absolute lg:top-[32rem] left-12 ">
            <hr className="w-24 font-extrabold hr mb-4" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold mb-2">
              Contact Us
            </h1>
            <p className="text-1xl text-white ">
              Explore my visual journey and discover the stories <br /> I have
              captured through my lens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
