import { Link } from "react-router-dom"
import "./PricingCardStyles.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h2>- REACT -</h2>
                <span className="bar"></span>
                <p>- Components -</p>
                <p>- JSX -</p>
                <p>- States and Props -</p>
                <p>- Events -</p>
                <Link to="/contact" className="btn">Contact Now</Link>
            </div>
            <div className="card">
                <h2>- DESIGN -</h2>
                <span className="bar"></span>
                <p>- Usability -</p>
                <p>- Accessibility -</p>
                <p>- Visual Appearance -</p>
                <p>- Responsiveness -</p>
                <Link to="/contact" className="btn">Contact Now</Link>
            </div>
            <div className="card">
                <h2>- CSS -</h2>
                <span className="bar"></span>
                <p>- Selectors -</p>
                <p>- Box Model -</p>
                <p>- Position -</p>
                <p>- Layout -</p>
                <Link to="/contact" className="btn">Contact Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard