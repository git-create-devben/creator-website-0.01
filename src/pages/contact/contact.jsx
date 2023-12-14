import "./contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-black h-[100vh] max-h-[100%] lg:py-16 py-32">
      {/* wrapper start */}
      <div className="wrapper flex flex-col mx-11 lg:flex-row gap-12 lg:p-20">
        {/* one single column start */}
        <div className="single flex-initial lg:w-[48rem] opacity-50 relative">
          <div className="absolute bottom-28 left-12">
            <hr className="w-24 font-extrabold hr" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold">
              Contact Us
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
            Get in Touch
          </h1>
          <p className="text-[0.82rem] text-white p-2 opacity-60">
            Hello, am Christina Demertzi, a passionate photographer from
            Germany.
          </p>
          <hr className="mt-8 opacity-50 " />
          <div className="grid lg:grid-cols-3 md:grid-cols-1 place-content-center   text-white p-4">
            <span className="text-md text-white ">
              <small className="text-[1.2rem] text-white opacity-50">
                Mail:
              </small>
              <i className="text-1xl text-white opacity-100 ml-2">
                Christina@gmail.com
              </i>
            </span>
            <span>
              <small className="text-[1.1rem] text-white opacity-50">
                Address:
              </small>
              <i className="text-[0.840rem] text-white opacity-100 ml-2">
                Germany 27TH BROOKLYN
              </i>
            </span>
            <span>
              <small className="text-[1.1rem] text-white opacity-50 ml-2">
                Phone:
              </small>
              <i className="text-[0.840rem] text-white opacity-100 ml-2">
                +7(111)123456
              </i>
            </span>
          </div>
          <div className="lg:p-10 flex flex-col justify-center gap-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-8 w-[100%]  rounded-3xl bg-black outline-none text-sm text-white"
            />
            <input
              type="email"
              placeholder="Your E-mail*"
              className="p-8 w-[100%]  rounded-3xl bg-black outline-none text-sm text-white"
            />
            <textarea
              name="message"
              id=""
              cols="20"
              rows="6"
              className="p-8 w-[100%]  rounded-3xl bg-black outline-none text-sm text-white"
              placeholder="Your message*"
            ></textarea>
          </div>
          <button className="px-12 py-4 bg-white opacity-80 rounded-full">
            <Link to={"/Gallery"}> My portfolio</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
