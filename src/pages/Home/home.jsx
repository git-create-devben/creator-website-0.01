import Carousel from "./Slider";
import "./home.css";
import Footer from "../../components/footers/footer";
const home = () => {
  return (
    <section className="bg-black h-[100vh] max-h-[100%] lg:py-16 py-32">
      <Carousel />
      <div className="lg:-mt-0 mt-10">
        <Footer/>
      </div>
    </section>
  );
};

export default home;
