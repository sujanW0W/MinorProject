import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
        <header className="hero-section">
        <div className="content">
            <img src={process.env.PUBLIC_URL+'images/bg_login.jpg'} className="logo" alt="NA" />
            <p className="sub-heading">Best Fashion Collection Of All Time</p>
        </div>
    </header> 
  )
}
