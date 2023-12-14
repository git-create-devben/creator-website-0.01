import Social from "../../components/Social/social";
const footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-around">
      <div className="grid grid-cols-2  place-content-center items-center text-white p-4">
        <span className="text-md text-white ">
          <small className="text-[1.2rem] text-white opacity-50">Mail:</small>
          <i className="text-1xl text-white opacity-100 ml-2">
            Christina@gmail.com
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
      <hr className="w-24 text-white opacity-50 lg:flex hidden" />
      <div className="text-white flex flex-wrap">
        <span>&copy; Christina 2023. </span>
        <span>
          Design &amp; developed by{" "}
          <a
            href="#"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevBen
          </a>
        </span>
        <Social />
      </div>
    </section>
  );
};

export default footer;
