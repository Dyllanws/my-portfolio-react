import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import WhatsApp from '../components/Whasapp'

const Contact = () => {
return <div>
    <Navbar/>
    <HeroImg2 heading="CONTACT." text="Lets talk" backgroundClass="hero-img-2"/>
    <Form/>
    <Footer/>
    <WhatsApp/>
  </div>
}

export default Contact