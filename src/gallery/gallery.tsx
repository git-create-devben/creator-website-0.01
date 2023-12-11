import { Button } from "@/components/ui/button";
import img from "../assets/bg.png";
const gallery = () => {
  return (
    // parent div
    <main className="p-20 flex justify-center h-[100vh] w-full">
      {/* first child div */}
      <div className="flex flex-col gap-20">
        {/* header div */}
        <div className="flex flex-row items-center justify-center">
          {/* header image */}
          <img src={img} alt="" className="rounded-full w-52 " />
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-10 items-center ">
              <h2 className="text-white">Christinadmrtzi</h2>
              <Button className="bg-[#5a58589a]">Following</Button>
              <Button className="bg-[#5a58589a]">Message</Button>
            </div>
            <div className="flex justify-between text-white">
              <span>
                206<b className="ml-1">post</b>
              </span>
              <span>
                10.7k<b className="ml-1">followers</b>
              </span>
              <span>
                658<b className="ml-1">following</b>
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-white">
                Christina Demertzi Photographer{" "}
                <small className="text-[#5a5858f1]">she/her</small>
              </p>
              <details className="text-white">
                <small className="text-[#5a5858f1]">Photographer </small> <br/>
                probably traveling or taking pictures yes, i do weddings
                <pre>@demertziphotography</pre>
              </details>
            </div>
          </div>
        </div>
        <hr/>
        <div>
            <h1>hello</h1>
        </div>
      </div>
    </main>
  );
};

export default gallery;
