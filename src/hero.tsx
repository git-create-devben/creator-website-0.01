import "./App.css";
import Navbar from "./components/navbar"
const hero = () => {
  return (
    <div className="container"> 
    <Navbar/> 
    {/* the container is background image located in css */}
      {/* <h1>Christina <br/> Demertzi</h1>
      <p>I'm a professional photographer from New York</p> */}
    </div>
  );
};

export default hero;
