import "./App.css";
import Navbar from "./components/navbar";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Typed from 'typed.js';

const Hero = () => {
  const background = useRef<null>(null)
 const type = useRef<null>(null)

  useEffect(() => {
    gsap.to(background, {
      rotation: 27,
      x: 100,
      duration: 10,
    });

    const typed = new Typed(type.current, {
        strings: ['Christina <br/> Demertzi.',],
        typeSpeed: 50,
    })

    return () => {
        typed.destroy()
    }
  }, []);
  return (
    <div className="container" ref={background}>
      <Navbar />
      {/* the container is background image located in css */}
      <h1 ref={type}></h1>
      <p>I'm a professional photographer from New York</p>
    </div>
  );
};

export default Hero;
