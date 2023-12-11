// import { useRef} from "react";
import { useState } from "react";
import "./navbar.css";

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
    <div className="navbar_wrapper">
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
    </div>
  );
}
