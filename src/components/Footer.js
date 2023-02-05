import './FooterStyles.css'

import React from 'react'

import {  FaGithub,  FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div>
              <p>Somewhere over the rainbow.</p>
              <p>Earth.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              55-11-95819-4016
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              Dyllan.cscc@outlook.com
            </h4>
          </div>
        </div>

        <div className="right">
            <h4>About myself</h4>
            <p>This is me Dyllan Christian. Front-end developer, born in Brazil. I enjoy learning new projects and technologies.</p>
            <div className='social'>
              <a href='https://www.instagram.com/dyllanws/'>
            <FaInstagram
                size={30}
                style={{ color: 'white', marginRight: '1rem' }}
              />
              </a>
              <a href='https://github.com/Dyllanws'>
              <FaGithub 
                size={30}
                style={{ color: 'white', marginRight: '1rem' }}
              />
              </a>
              <a href='https://www.linkedin.com/in/dyllancardoso/'>
              <FaLinkedin
                size={30}
                style={{ color: 'white', marginRight: '1rem' }}
              />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
