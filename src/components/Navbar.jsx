import React, { useState } from 'react'
import pavanLogo from '../assets/pavanbhosle.png'
import menuIcon from '../assets/menu.png'
import cancelIcon from '../assets/cancel.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="pill-header">
        <nav
          className="pill-nav"
          style={{
            backdropFilter: 'blur(30px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            height: '100%',
            width: '100%',
            willChange: 'transform',
            borderRadius: '12px',
            opacity: 1
          }}
        >
          <a href="#hero" className="pill-nav-brand-mobile"><img src={pavanLogo} alt="Pavan Bhosle" className="pill-brand-mobile" /></a>
          <a href="#about" className="pill-nav-item">About</a>
          <a href="#skills" className="pill-nav-item">Skills</a>
          <a href="#hero" className="pill-nav-item pill-nav-center-brand"><img src={pavanLogo} alt="Pavan Bhosle" className="pill-brand" /></a>
          <a href="#projects" className="pill-nav-item">Projects</a>
          <a href="#contact" className="pill-nav-item">Contact</a>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            {menuOpen ? (
              <img src={cancelIcon} width="22" height="22" alt="cancel" />
            ) : (
              <img src={menuIcon} width="22" height="22" alt="menu" />
            )}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <button className="menu-close-btn" onClick={() => setMenuOpen(false)}>
              <img src={cancelIcon} width="24" height="24" alt="close" />
            </button>
          </div>
          <div className="mobile-menu-links">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skill</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </>
  )
}
