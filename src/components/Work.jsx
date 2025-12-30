import React from 'react'
import getInTouchBadge from '../assets/getintouch.png'

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="container work-container">
        <div className="work-title">
          <span className="work-title-main">LET’S WORK</span>
          <span className="work-title-script">Together!</span>
        </div>
        <div className="work-divider" />
        <div className="work-contact">
          <div className="work-contact-content">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pavanbhosle1616@gmail.com" target="_blank" rel="noopener noreferrer" className="work-email">
              pavanbhosle1616@gmail.com
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-arrow">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://wa.me/919511669252" className="work-phone">+91 9511669252</a>
          </div>
          <div className="work-badge"><img src={getInTouchBadge} alt="Get in touch" className="work-badge-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
