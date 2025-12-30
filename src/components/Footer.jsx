import React from 'react'
import pavanLogo from '../assets/pavanbhosle.png'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">Copyright ©{new Date().getFullYear()} All right reserved - 2025</div>
        <div className="footer-center">
          <img src={pavanLogo} alt="Pavan Bhosle" className="footer-logo" />
        </div>
        <div className="footer-right">
          <a href="#hero" className="footer-back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5"/>
              <path d="M5 12l7-7 7 7"/>
            </svg>
            Back on top
          </a>
        </div>
      </div>
    </footer>
  )
}
