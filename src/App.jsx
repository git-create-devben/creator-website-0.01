import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimRoute from "../AnimRoute";
import Header from "./components/Header/header";
import { useState, useEffect } from "react";
import "./index.css"
function App() {
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
  }, []);
  return (
    <>
       {isLoading ? (
        // Show a loading indicator (you can replace this with your loading component)
        <div className="loader">
          <div className="intern"></div>
          <div className="external-shadow">
            <div className="central"></div>
          </div>
        </div>
      ) : (
      <Router>
        <Header />
        <AnimRoute />
      </Router>
      )}
    </>
  );
}

export default App;
