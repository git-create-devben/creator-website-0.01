import Typed from "typed.js";
import { useRef, useEffect } from "react";
// import "../../pages/hero/App.css";
import { motion } from "framer-motion";
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
    <motion.div
    initial={{ opacity: 0, y: "-50%" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "-50%" }}
    transition={{
      duration: 1.4,
      ease: [0.6, 0.01, 0.05, 0.9],
    }}
    
    className="hidden text-white xl:mt-[16rem] mt-[22rem]">
      <h1 ref={el} className=" text-white hidden xl:text-[7rem] lg:leading-[6.5rem] font-extrabold xl:ml-40 xl:-mt-10 ml-4 leading-[3.6rem] "></h1>
      <p className="xl:ml-44 ml-4 text-white">I'm a professional photographer from New York</p>
    </motion.div>
  );
}
