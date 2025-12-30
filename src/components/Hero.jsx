import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import CountUp from './CountUp'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow-red" />
      <div className="container hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0s' }}>H</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.08s' }}>E</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.16s' }}>Y</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.24s' }}>,</span>{' '}
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.32s' }}>I</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.40s' }}>’</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.48s' }}>M</span>{' '}
            <span className="mobile-only-break"></span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.56s' }}>P</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.64s' }}>A</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.72s' }}>V</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.80s' }}>A</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.88s' }}>N</span><br/>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '0.96s' }}>B</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '1.04s' }}>H</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '1.12s' }}>O</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '1.20s' }}>S</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '1.28s' }}>L</span>
            <span className="animate-text" style={{ display: 'inline-block', opacity: 1, filter: 'blur(0px)', transform: 'none', willChange: 'transform', animationDelay: '1.36s' }}>E</span>
          </h1>
          <div className="hero-subtitle">Crafting Smart Interfaces with AI and Modern Frontend</div>
          <div className="hero-actions">
            <a href="https://github.com/pavan050505" target="_blank" rel="noopener noreferrer" className="hero-btn primary">
              <span className="star-icon">⭐</span> Star Me On Github
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn secondary">
              See My Resume
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-number"><CountUp end={40} /></div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number"><CountUp end={2} /></div>
              <div className="stat-label">Years of Experience</div>
            </div>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <DotLottieReact
            className="hero-lottie"
            src="https://lottie.host/5afd86bd-afdf-4c3c-bcfc-5a15cdd5fcb5/lAVMB5igf6.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  )
}
