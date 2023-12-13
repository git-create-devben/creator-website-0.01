import Gallery from "./src/pages/gallery/gallery";
import Hero from "./src/pages/hero/hero";
import { Routes, Route, useLocation } from "react-router-dom/";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Hero />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
