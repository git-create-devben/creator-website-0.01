// import Hero from "./pages/hero/hero";
// import Showcase from "./components/Showcase/showcase"
import Footer from "./components/footers/footer";
import AnimeRoute from "../AnimRoutes"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
       <Router>
        <AnimeRoute/>
        <Footer/>
       </Router>
    </>
  );
}

export default App;
