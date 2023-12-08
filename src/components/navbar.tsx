import "./navbar.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
export default function Navbar() {
  const navbar = [
    { title: "Home", href: "/" },
    { title: "Gallery", href: "/Gallery" },
    { title: "Service", href: "/service" },
    { title: "About", href: "/about" },
    { title: "contact", href: "/contact" },
  ];

  const background = useRef<null>(null);

  useEffect(() => {
    gsap.to(background.current, {
      // opacity: 1,
      y:50,
      duration:0.3,      
      stagger: 0.2,
    });
  }, []);
  return (
    <nav className="navbar-wrapper" ref={background}>
      <ul>
        <span className="logo">Christina.</span>
        {navbar.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
