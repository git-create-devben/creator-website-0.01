import { Link } from "react-router-dom";
import img from "../../assets/bg2.jpg";
const about = () => {
  return (
    <section className="">
      <div className="mx-auto h-full relative ">
        <div className="bg-red-400 flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="w-[42rem]">
            <img
              src={img}
              alt=""
              className="flex-1 max-h-96 lg:max-h-max order-2 "
            />
          </div>
          <div className="flex-1 pt-36">
            <h1 className="text-4xl font-bold">About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
              enim culpa vitae tenetur, iure fugit inventore minima veritatis
              eum.
            </p>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste
              fugiat sequi quibusdam quia! Asperiores dolorum sequi facere
              nesciunt reprehenderit.
            </p>
            <Link></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
