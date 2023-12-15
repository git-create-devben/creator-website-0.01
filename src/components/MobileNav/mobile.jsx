import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import {CgMenuRight} from "react-icons/cg"
import {Link} from "react-router-dom"
import { motion} from "framer-motion"

const menuVariants = {
    hidden: {
        x: '100%'
    },
    show: {
        x: '20%',
        transition: {
            ease:[0.6,0.01,-0.05,0.9],
            // ease: easeIn
        }
    }
}
const Mobile = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="text-[#111] xl:hidden">
        <div onClick={() => setOpenMenu(true)} className="text-3xl cursor-pointer text-[#ccc]">
            <CgMenuRight/>
        </div>
        <motion.div 
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''} 
        className="bg-[#252525] shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 flex flex-col text-center">
            <div onClick={() => setOpenMenu(false)} className="text-4xl absolute z-30 left-4 top-14 text-[#ccc] cursor-pointer">
                <IoMdClose/>
            </div>
            <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-[#ccc] font-bold text-3xl">
                <li className="hover:text-[#464040] hover:scale-[1.2]"><Link to={'/'}>Home</Link></li>
                <li className="hover:text-[#464040] hover:scale-[1.2]"><Link to={'/Gallery'}>Gallery</Link></li>
                <li className="hover:text-[#464040] hover:scale-[1.2]"><Link to={'/service'}>Services</Link></li>
                <li className="hover:text-[#464040] hover:scale-[1.2]"><Link to={'/about'}>About</Link></li>
                <li className="hover:text-[#464040] hover:scale-[1.2]"><Link to={'/contact'}>Contact</Link></li>
            </ul>
          
          
           
        </motion.div>
    </nav>
  )
}

export default Mobile