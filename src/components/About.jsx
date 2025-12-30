import React from 'react'
import SkillsGrid from './SkillsGrid.jsx'
import useInView from '../hooks/useInView'

export default function About() {
  const [aboutLeftRef, aboutLeftVisible] = useInView()
  const [aboutRightRef, aboutRightVisible] = useInView()

  return (
    <section id="about" className="about-main">
      <div className="about-main-container">
        <div className="about-main-grid">
          <div className="about-main-left">
            <div 
              ref={aboutLeftRef}
              className={`about-main-card-left ${aboutLeftVisible ? 'visible' : ''}`}
            >
              <SkillsGrid />
            </div>
          </div>

          <div className="about-main-right">
            <div 
              ref={aboutRightRef}
              className={`about-main-card-right about-main-text ${aboutRightVisible ? 'visible' : ''}`}
            >
              <div className="about-main-title">About Me</div>
              <div className="about-main-name">I am <span className="about-main-accent">Pavan Bhosle</span></div>
              <p className="about-main-paragraph">A passionate AI & Web Developer with a strong interest in machine learning, Frontend development, and modern AI technologies. I enjoy exploring new concepts, building real-world projects, and creating solutions that make an impact. I love working on ideas that combine creativity with technology—whether it's AI-based applications, interactive web experiences, or experimental development projects. I’m always focused on learning, improving, and building better products every day. Let’s connect and create something amazing!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
