import Home from "./src/pages/Home/home";
import About from "./src/pages/About/about";
import Gallery from "./src/pages/Gallery/Gallery";
import Service from "./src/pages/services/service";
import Contact from "./src/pages/contact/contact";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./src/index.css";

const AnimRoute = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Your async code here

      // Simulate a delay (remove this in your actual implementation)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Set loading to false once data is fetched
      setIsLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {isLoading ? (
        // Show a loading indicator (you can replace this with your loading component)
        <div className="loader">
          <div className="intern"></div>
          <div className="external-shadow">
            <div className="central"></div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
};

export default AnimRoute;
