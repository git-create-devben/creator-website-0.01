import { Link } from "react-router-dom";
import Footer from "../../components/footers/footer";
import "./about.css";
const about = () => {
  return (
    <section className="bg-black h-[100vh] max-h-[100%] lg:py-16 py-32">
      {/* wrapper start */}
      <div className="wrapper flex flex-col mx-11 lg:flex-row gap-12 lg:p-20">
        {/* one single column start */}
        <div className="single2 flex-initial lg:w-[48rem] opacity-70 relative">
          <div className="absolute bottom-28 left-12">
            <hr className="w-24 font-extrabold hr" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold">
              About Me
            </h1>
            <p className="text-1xl text-white ">
              Explore my visual journey and discover the stories <br /> I have
              captured through my lens.
            </p>
          </div>
        </div>
        <div className="flex-initial lg:w-[60rem] rounded-[30px] bg-[#111] p-10">
          <hr className="w-24 font-extrabold hr mb-2 opacity-50" />
          <h1 className="text-white lg:text-3xl text-2xl font-extrabold opacity-80 mb-2">
            It all Started with Picture
          </h1>
          <p className="text-[0.82rem] text-white p-2 opacity-60">
            Hello, am Christina Demertzi, a passionate photographer from
            Germany.
          </p>
          <hr className="mt-10 opacity-50 " />
          <div className="mt-2 p-10">
            <p className="lg:text-[0.98rem] opacity-50 text-white lg:leading-8">
              My journey in photography is a testament to my love for
              storytelling through the lens. With a keen eye for capturing the
              extraordinary in the ordinary, I invite you to join me on a visual
              adventure through the diverse landscapes and rich cultures that
              inspire my work. Each photograph is a glimpse into my world, where
              creativity and a love for my homeland converge to create timeless
              stories. Welcome to my space, where moments come alive in pixels,
              and each image tells a unique tale.
            </p>
          </div>
          <hr className="mt-10 opacity-50 " />
          <div className="grid lg:grid-cols-4 grid-cols-2  p-10 justify-between lg:gap-0 gap-12">
            <span className="text-4xl font-extrabold text-white flex flex-col opacity-80">
              500
              <small className="text-[0.892rem]  text-white">
                Wedding picture
              </small>
            </span>
            <span className="text-4xl font-extrabold text-white flex flex-col opacity-80">
              400
              <small className="text-[0.892rem]  text-white">
                portraits picture
              </small>
            </span>
            <span className="text-4xl font-extrabold text-white flex flex-col opacity-80">
              600
              <small className="text-[0.892rem]  text-white">
                family picture
              </small>
            </span>
            <span className="text-4xl font-extrabold text-white flex flex-col opacity-80">
              300
              <small className="text-[0.892rem]  text-white">
                concert picture
              </small>
            </span>
          </div>
          <button className="px-12 py-4 bg-white opacity-80 rounded-full">
            <Link to={"/Gallery"}> My portfolio</Link>
          </button>
          {/* Add your text content here */}
        </div>
      </div>
      <div className="lg:-mt-20">
        <Footer />
      </div>
    </section>
  );
};

export default about;
