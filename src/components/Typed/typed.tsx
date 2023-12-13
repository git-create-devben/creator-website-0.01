import Typed from "typed.js";
import { useRef, useEffect } from "react";
import "../../pages/hero/App.css";
export default function Text() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Christina <br/> Demertiz"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <div className="first_layout text-white mt-[16rem]">
      <h1 ref={el} className="text-[goldenrod] text-[7rem]"></h1>
      <p>I'm a professional photographer from New York</p>
    </div>
  );
}
