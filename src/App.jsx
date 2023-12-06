import Spline from "@splinetool/react-spline";
import "./App.css";
export default function App() {
  return (
    <div className="relative">
      <div>
        <Spline id="spline" scene="https://prod.spline.design/ZBQTTfn5dKRfPOxz/scene.splinecode" />
        <h1 className="text-4xl text-red-400">Hello</h1>
        {/* <spline-viewer className="spline" url="https://prod.spline.design/ZBQTTfn5dKRfPOxz/scene.splinecode"></spline-viewer> */}
      </div>
    </div>
  );
}
