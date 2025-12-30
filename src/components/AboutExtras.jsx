import React from 'react'
import useInView from '../hooks/useInView'

export default function AboutExtras() {
  const [aboutExtraLeftRef, aboutExtraLeftVisible] = useInView()
  const [aboutExtraRightRef, aboutExtraRightVisible] = useInView()

  return (
    <section id="about-extras" className="about">
      <div className="container">
        <div className="about-grid">
          <div 
            ref={aboutExtraLeftRef}
            className={`about-left ${aboutExtraLeftVisible ? 'visible' : ''}`}
          >
            <div className="about-card about-role">
              <div className="about-card-title">Surviving as</div>
              <div className="about-card-value">Student choosing growth over comfort</div>
            </div>

            <div className="about-card about-social-card">
              <div className="social-grid">
                <a href="https://www.instagram.com/pavan_bhosle_05/" className="social-btn instagram" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" />
                </a>
                <a href="https://github.com/pavan050505" className="social-btn github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.simpleicons.org/github/ffffff?viewbox=auto" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/pavan-bhosle-877b9624b/" className="social-btn linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.13 6 0 4.88 0 3.5C0 2.12 1.13 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.22 8.67H4.77V24H0.22V8.67ZM8.55 8.67H13V10.64H13.07C13.7 9.48 15.18 8.26 17.48 8.26C22.08 8.26 23 10.9 23 15.02V24H18.44V15.98C18.44 13.66 17.9 12.12 15.99 12.12C14.39 12.12 13.47 13.2 13.11 14.21C12.97 14.58 12.93 15.09 12.93 15.61V24H8.38V8.67H8.55Z"/>
                  </svg>
                </a>
                <a href="https://x.com/PavanBhosle005" className="social-btn twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.simpleicons.org/x/ffffff" alt="Twitter" />
                </a>
              </div>
            </div>

            <div className="about-card about-location">
              <div className="about-card-title">Buffering in</div>
              <div className="about-card-value">Chh.Sambhajinagar, Maharashtra</div>
            </div>
          </div>

          <div 
            ref={aboutExtraRightRef}
            className={`about-right ${aboutExtraRightVisible ? 'visible' : ''}`}
          >
            <div className="about-card about-cta">
              <div className="cta-title">WANNA WORK TOGETHER?</div>
              <div className="cta-subtitle">My resume is one click away</div>
              <a href="/resume.pdf" className="btn-download">Download for free <span role="img" aria-label="smile">😅</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
