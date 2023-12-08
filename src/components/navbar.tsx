import React from "react";

export default function Navbar() {
  const navbar = [
    { title: "Home", href: "/" },
    { title: "Gallery", href: "/Gallery" },
    { title: "Service", href: "/service" },
    { title: "About", href: "/about" },
    { title: "contact", href: "/contact" },
  ];

  return (
    <nav>
      <ul>
        {navbar.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
