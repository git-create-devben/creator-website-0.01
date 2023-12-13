import { Link } from "react-router-dom";
import Social from "../Social/social";
import MobileNav from "../MobileNav/mobile";
const header = () => {
  return (
    <header className="fixed w-full p-[30px] lg:px-[100px] lg:mt-[30px] z-30 h-[100px] lg:h-[100px] flex">
      <div className="flex flex-col lg:flex lg:items-center lg:flex-row  w-full gap-x-10">
        <Link to={"/"} className="max-w-[200px] -mt-4">
          <h1 className="text-5xl text-[goldenrod] font-extrabold italic">Christina.</h1>
        </Link>
        <nav className="hidden xl:flex gap-x-6 ">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl"
          >
            Home
          </Link>
          <Link
            to={"/Gallery"}
            className="text-[#696c6d] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl"
          >
            Gallery
          </Link>
          <Link
            to={"/service"}
            className="text-[#696c6d] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl"
          >
            Services
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-[#ccc] hover:scale-[1.2] transition-opacity text-2xl"
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
