import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img from "../assets/bg.png";
import PhotoGallery from "./category";
import { useState } from "react";
import Footer from "../components/footers/footer";
// import simpleview from "./simpleview";
const Gallery = () => {
  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    setDisplay(!display);
  };
  const photos = [
    { id: 1, category: "wedding", url: "https://t.ly/E3uvR" },
    { id: 2, category: "wedding", url: "https://t.ly/YGDNO" },
    { id: 3, category: "street", url: "https://t.ly/E3uvR" },
    { id: 4, category: "street", url: "https://t.ly/E3uvR" },
    // Add more photos with appropriate paths
  ];
  return (
    // parent div
    <>
      <section>
        <nav className="flex justify-between p-10">
          <span className="text-white cursor-pointer">
            <Link to="/"> Go back</Link>
          </span>
          <span className="text-white cursor-pointer" onClick={handleDisplay}>
            Change Display
          </span>
        </nav>

        <main className="p-2 flex justify-center h-[100vh] w-full bg-black">
          {/* first child div */}
          <div className="flex flex-col gap-20 ">
            {/* header div */}
            {display && (
              <div className="flex flex-row items-center justify-center gap-10">
                {/* header image */}
                <img src={img} alt="" className="rounded-full lg:w-52 w-44 " />
                <div className="flex flex-col gap-6">
                  <div className="lg:flex lg:flex-row lg:gap-10 lg:items-center lg:flex-shrink-0  ">
                    <h2 className="text-white mb-2">Christinadmrtzi</h2>
                    <div className="flex gap-2">
                      <Button className="bg-[#5a58589a] lg:w-10/12 w-14 text-xs">
                        Following
                      </Button>
                      <Button className="bg-[#5a58589a] lg:w-10/12 w-14 text-xs">
                        Message
                      </Button>
                    </div>

                    {/* <span className="text-white" onClick={handleDisplay}>
                  change view
                </span> */}
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className=" flex flex-col lg:flex lg:flex-row">
                      206<b className="lg:ml-1 ">post</b>
                    </span>
                    <span className=" flex flex-col lg:flex lg:flex-row">
                      10.7k<b className="lg:ml-1 ">followers</b>
                    </span>
                    <span className=" flex flex-col lg:flex lg:flex-row">
                      658<b className="lg:ml-1 ">following</b>
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-white">
                      Christina Demertzi Photographer{" "}
                      <small className="text-[#5a5858f1]">she/her</small>
                    </p>
                    <details className="text-white">
                      <small className="text-[#5a5858f1]">Photographer </small>{" "}
                      <br />
                      probably traveling or taking pictures yes, i do weddings
                      <pre>@demertziphotography</pre>
                    </details>
                  </div>
                </div>
              </div>
            )}
            {display && (
              <hr className="lg:w-[52rem] w-[22rem] block m-auto -mb-10" />
            )}

            <div className="text-white  bg-black h-[100vh]  text-center">
              <PhotoGallery photos={photos} />
            </div>
          </div>
        </main>
      </section>
      <div className="lg:mt-24 mt-[48.1rem] ">
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
