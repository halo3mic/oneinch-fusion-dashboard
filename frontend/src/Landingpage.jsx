import React from 'react'
import Hero from './landingpage/Hero'
import Navbar from './landingpage/Navbar'
import './Landingpage.css'


const Landingpage = () => {
  return (
    <div className="background-img">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Landingpage;