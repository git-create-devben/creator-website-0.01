import { Link } from "react-router-dom";
import Social from "../Social/social";
import MobileNav from "../MobileNav/mobile";
const header = () => {
  return (
    <header className="fixed w-full p-[30px] lg:px-[100px] lg:mt-[30px] z-30 h-[100px] lg:h-[100px] flex">
      <div className="flex flex-col lg:flex lg:items-center lg:flex-row  w-full gap-x-20">
        <Link to={"/"} className="max-w-[200px] -mt-4">
          <h1 className="text-5xl text-[goldenrod] font-extrabold italic">Christina.</h1>
        </Link>
        <nav className="hidden xl:flex gap-x-6 ">
          <Link
            to={"/"}
            className="text-[#f8f8f8] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl font-bold"
          >
            Home
          </Link>
          <Link
            to={"/Gallery"}
            className="text-[#ffffff] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl font-bold"
          >
            Gallery
          </Link>
          <Link
            to={"/service"}
            className="text-[#ffffff] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl font-bold"
          >
            Services
          </Link>
          <Link
            to={"/about"}
            className="text-[#ffffff] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl font-bold"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-[#ffffff] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl font-bold"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Social />
      <MobileNav />
    </header>
  );
};

export default header;
