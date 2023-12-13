import Navbar from "@/components/navbar";
import Text from "../../components/Typed/typed";
// import img from "../../assets/bg2.g"
import { motion, AnimatePresence } from "framer-motion";
const hero = () => {
  return (
    <AnimatePresence initial={true} mode="wait">
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={{
        duration: 1.4,
        ease: [0.6, 0.01, 0.05, 0.9],
      }}
      className="w-full bg-cover  h-[100vh] bg-no-repeat w-full]"
      style={{
        backgroundImage:
          "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/portrait.jpg)",
      }}
    >
      <Navbar />
      <Text />
    </motion.div>
    </AnimatePresence>
  );
};
export default hero;
