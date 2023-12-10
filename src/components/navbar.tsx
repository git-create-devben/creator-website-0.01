import { useState, useEffect } from "react";
import "./navbar.css";

import { motion } from "framer-motion";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false); // State to control navbar visibility
  const [isMobile, setIsMobile] = useState(false); // State to determine mobile view

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  const toggleNav = () => setShowNav(!showNav);

  const navbar = [
    { title: "Home", href: "/" },
    { title: "Gallery", href: "/Gallery" },
    { title: "Service", href: "/service" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div>
      {isMobile && (
        <button className="menu-button" onClick={toggleNav}>
          {showNav ? "Close" : "Menu"}
        </button>
      )}
      <motion.nav
        className={`navbar-wrapper ${showNav ? "open" : ""}`}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <ul>
          <span className="logo">Christina.</span>
          {navbar.map((item) => (
            <li key={item.title}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
