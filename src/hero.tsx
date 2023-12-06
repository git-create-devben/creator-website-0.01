"use client"
import "./app/globals.css"
import Spline from '@splinetool/react-spline';
const hero = () => {
  return (
    <div className='relative wrapper'>
       <Spline className='absolute top-0 right-0 m-0 spline' scene="https://prod.spline.design/ZBQTTfn5dKRfPOxz/scene.splinecode" />
        <h1 className="text-red-400 text-4xl">Hello world</h1>
    </div>
  )
}

export default hero