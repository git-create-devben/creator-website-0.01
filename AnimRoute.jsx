import Home from "./src/pages/Home/home";
import About from "./src/pages/About/about";
import Gallery from "./src/pages/Gallery/Gallery";
import Service from "./src/pages/services/service";
import Contact from "./src/pages/contact/contact";
import { Routes, Route } from "react-router-dom";

const AnimRoute = () => {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
  );
}



export default AnimRoute;
