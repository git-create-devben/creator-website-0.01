import Navbar from "@/components/Navbar/navbar";
import Text from "../../components/Typed/typed";
// import img from "../../assets/bg2.g"
import Showcase from "../../components/Showcase/showcase"
import "./App.css"
import { motion, AnimatePresence } from "framer-motion";
const hero = () => {
  return (
    <AnimatePresence initial={true} mode="wait">
    <motion.div
      initial={{ scale: 0}}
      animate={{ scale: 1 }}
      exit={{ scale: 0  }}
      transition={{
        duration: 1.4,
        ease: [0.6, 0.01, 0.05, 0.9],
      }}
      className="hero"
    
    >
      <Navbar />
      <Text />
    </motion.div>
    <Showcase/>
    </AnimatePresence>
  );
};
export default hero;
