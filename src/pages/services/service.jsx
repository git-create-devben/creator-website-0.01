// import { Link } from "react-router-dom";
import { wedding } from "./6.jpg"
import "./service.css";
const service = () => {
  return (
    <section className="bg-black h-[100vh] max-h-[100%] lg:py-16 py-32">
      {/* wrapper start */}
      <div className="wrapper flex flex-col mx-11 lg:flex-row gap-12 lg:p-20">
        {/* one single column start */}
        <div className="service flex-initial lg:w-[48rem] opacity-50 relative">
          <div className="absolute bottom-28 left-12">
            <hr className="w-24 font-extrabold hr" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold">
              Our services
            </h1>
            <p className="text-1xl text-white ">
              Explore my visual journey and discover the stories <br /> I have
              captured through my lens.
            </p>
          </div>
        </div>
        <div className="flex-initial lg:w-[60rem] rounded-[30px] bg-[#111] p-10">
          <hr className="w-24 font-extrabold hr  opacity-50 mb-2" />
          <h1 className="text-white lg:text-6xl text-2xl font-extrabold opacity-80 mb-2">
            Service
          </h1>
          <p className="text-[0.82rem] text-white p-2 opacity-60">
            Hello, am Christina Demertzi, a passionate photographer from
            Germany.
          </p>
          <hr className="mt-8 opacity-50 " />
          <div className="flex flex-col gap-8 p-4">
            <div className="grid grid-cols-2 gap-4">
              <img src={wedding} alt="" className="w-40 h-40"/>
              <div className="flex flex-col gap-4">
                <h2>Wedding Photography</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing edit.
                  Repellents, officio.
                </p>
                <span className="flex flex-col">
                 portraits
                 weddings
                 Commercial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default service;
