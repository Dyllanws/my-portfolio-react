import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'

const AboutContent = () => {
  return (
    <div>
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am a professional passionate about technology and design, with a strong background in front-end development and design skills. I have experience in creating user interfaces and interaction design, as well as knowledge in web development. My passion is to create innovative and attractive projects that offer an excellent experience for users. I am proactive, communicative, and always seeking to learn and stay up-to-date with new trends and technologies. I believe that creativity and innovation are fundamental to achieving success in any project.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className='img' alt='About'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80" className='img' alt='About'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent