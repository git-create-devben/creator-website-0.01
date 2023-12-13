import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimRoute from "../AnimRoute";
import Header from "./components/Header/header";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <AnimRoute />
      </Router>
    </>
  );
}

export default App;
