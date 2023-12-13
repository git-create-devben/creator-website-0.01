import Navbar from "@/components/navbar"
import Text from "../../components/Typed/typed"
// import img from "../../assets/bg2.g"
const hero = () => {
  return (
    <div className="w-full bg-cover  h-[100vh] bg-no-repeat w-full]" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/portrait.jpg)'}}>
      <Navbar/>
      <Text/>
    </div>
  )
}

export default hero