// import { useRef} from "react";
import { useState } from "react";
import "./navbar.css";
import { motion, AnimatePresence } from "framer-motion";
// import transition1 from "../../transition"



export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleshow = () => {
    setShowNavbar(!showNavbar);
    console.log("show");
  };
  const navbar = [
    { title: "Home", href: "/" },
    { title: "Gallery", href: "/Gallery" },
    { title: "Service", href: "/service" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: '-50%'}}
      animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: '-50%'}}
      transition={{
        duration: 1.4,
        ease: [0.6, 0.01, 0.05, 0.9]
      }}
      className=" navbar bg-transparent navbar_wrapper"
    >
      <span className="logo">Christina.</span>
      <nav className="nav_container">
        {showNavbar && (
          <ul>
            {navbar.map((item) => (
              <li key={item.title}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <button className="menu" onClick={handleshow}>
        menu
      </button>

      {/* <button>close</button> */}
    
    </motion.div>
    </AnimatePresence>

  );
}
