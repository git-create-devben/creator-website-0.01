import "./navbar.css";
// import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  const navbar = [
    { title: "Home", href: "/" },
    { title: "Gallery", href: "/Gallery" },
    { title: "Service", href: "/service" },
    { title: "About", href: "/about" },
    { title: "contact", href: "/contact" },
  ];

  return (
    <motion.nav
    transition={{
      ease: "linear",
      duration: 2,
      x: { duration: 1 }
    }}
    className="navbar-wrapper" >
      <ul>
        <span className="logo">Christina.</span>
        {navbar.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
