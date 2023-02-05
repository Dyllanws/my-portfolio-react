import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
import WhatsApp from '../components/Whasapp'

const Project = () => {
  return <div>
    <Navbar/>
    <HeroImg2 heading="PROJECTS." text="Some of my works"/>
    <Work/>
    <PricingCard/>
    <Footer/>
    <WhatsApp/>
  </div>
    
  
}

export default Project