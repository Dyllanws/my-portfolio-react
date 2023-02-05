import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import WhatsApp from '../components/Whasapp'

const About = () => {
  return <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="I'm a Front-End Developer" backgroundClass="hero-img-1"/>
      <AboutContent/>
      <Footer/>
      <WhatsApp/>
    </div>
}

export default About