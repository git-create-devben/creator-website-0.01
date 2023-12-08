import "./App.css";
import Navbar from "./components/navbar";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useFollowPointer } from "./components/useFollowPointer";
// import { Divider } from "@mui/material";

const Hero = () => {
  const background = useRef<null>(null);
  const type = useRef<null>(null);

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  useEffect(() => {
    gsap.to(background, {
      rotation: 27,
      x: 100,
      duration: 10,
    });

    const typed = new Typed(type.current, {
      strings: ["Christina <br/> Demertzi."],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container" ref={background}>
      <Navbar />
      <div className="hero-grid">
        <div className="first_layout">
          <h1 ref={type}></h1>
          <p>I'm a professional photographer from New York</p>
        </div>
        <div className="second_layout">
          <div className="divider1"></div>
          <p className="content">Text</p>
          <div className="divider2"></div>
        </div>
      </div>

      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </div>
  );
};

export default Hero;
