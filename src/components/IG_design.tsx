import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import goback from "../../goback.json";
import { Button } from "@/components/ui/button";
import img from "../assets/bg.png";
export default function IG() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <main>
      <nav className="flex justify-between p-10 ">
        <span className="text-white cursor-pointer">
          <Link to="/">
            <Player
              autoplay
              loop
              src={goback}
              style={{ height: "30px", width: "50px" }}
            ></Player>
            {/* Go back */}
          </Link>
        </span>
        <span className="text-white cursor-pointer" onClick={handleDisplay}>
          Change Display
        </span>
      </nav>

      {display && (
        <div className="flex flex-row items-center justify-center gap-10">
          {/* header image */}
          <img
            src={img}
            alt=""
            className="rounded-full lg:w-52 w-44 self-start"
          />
          <div className="flex flex-col gap-6">
            <div className="lg:flex lg:flex-row lg:gap-10 lg:items-center lg:flex-shrink-0  ">
              <h2 className="text-white mb-2">Christinadmrtzi</h2>
              <div className="flex gap-2 flex-col lg:flex-row">
                <Button className="bg-[#5a58589a]  text-xs">Following</Button>
                <Button className="bg-[#5a58589a]  text-xs">Message</Button>
              </div>

              {/* <span className="text-white" onClick={handleDisplay}>
                  change view
                </span> */}
            </div>
            <div className="flex justify-between items-center text-white -ml-[4rem] lg:ml-0">
              <span className=" flex flex-col lg:flex lg:flex-row text-[0.800rem]">
                206<b className="lg:ml-1 text-[0.800rem]">post</b>
              </span>
              <span className=" flex flex-col lg:flex lg:flex-row text-[0.800rem]">
                10.7k<b className="lg:ml-1 text-[0.800rem]">followers</b>
              </span>
              <span className=" flex flex-col lg:flex lg:flex-row text-[0.800rem]">
                658<b className="lg:ml-1 text-[0.800rem]">following</b>
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-white">
                Christina Demertzi Photographer{" "}
                <small className="text-[#5a5858f1]">she/her</small>
              </p>
              <details className="text-white">
                <small className="text-[#5a5858f1]">Photographer </small> <br />
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
    </main>
  );
}
