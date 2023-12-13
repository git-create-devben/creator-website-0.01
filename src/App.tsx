import Hero from "./pages/hero/hero";
import Showcase from "./components/Showcase/showcase"
import Footer from "./components/footers/footer";

function App() {
  return (
    <div data-theme="dark">
      <Hero />
      <Showcase/>
      <Footer/>
    </div>
  );
}

export default App;
