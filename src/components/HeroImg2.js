import './HeroImg2Styles.css'

import React from 'react'

const HeroImg2 = ({heading, text, backgroundClass}) => {
  return (
    <div className={`hero-img ${backgroundClass}`}>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImg2