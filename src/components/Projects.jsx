import React from 'react'
import useInView from '../hooks/useInView'
import aiHelmetDetection from '../assets/AI Helmet Detection System.png'
import roadSafety from '../assets/RoadSafety Analytics.png'
import portfolio from '../assets/Portfolio Website.png'
import resumeBuilder from '../assets/AI Resume and Cover Letter Builder.png'
import nineMR from '../assets/9MR.png'
import EMSimg from '../assets/EMS.png'

export default function Projects() {
  const [proj1Ref, proj1Visible] = useInView()
  const [proj2Ref, proj2Visible] = useInView()
  const [proj3Ref, proj3Visible] = useInView()
  const [proj4Ref, proj4Visible] = useInView()
  const [proj5Ref, proj5Visible] = useInView()
  const [proj6Ref, proj6Visible] = useInView()

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-section-heading shine">
          <span className="shine">PROJECTS</span>
        </h2>
        <div className="projects-section-grid">

          <article ref={proj6Ref} className={`projects-section-card project-card-right ${proj6Visible ? 'visible' : ''}`}>
            <div className="projects-section-card-image">
              <img src={resumeBuilder} alt="AI Resume and Cover Letter Builder" />
            </div>
            <div className="projects-section-card-body">
              <div className="projects-section-card-title">AI Resume and Cover Letter Builder</div>
              <div className="projects-section-card-subtitle">AI based Web App</div>
              <div className="projects-section-card-desc">AI-powered resume analysis with skill extraction and smart feedback.</div>
              <div className="projects-section-card-icons">
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-11.5%20-10.23174%2023%2020.46348'%3e%3ctitle%3eReact%20Logo%3c/title%3e%3ccircle%20cx='0'%20cy='0'%20r='2.05'%20fill='%2361dafb'/%3e%3cg%20stroke='%2361dafb'%20stroke-width='1'%20fill='none'%3e%3cellipse%20rx='11'%20ry='4.2'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(60)'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(120)'/%3e%3c/g%3e%3c/svg%3e" alt="Live" />
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M64.004%2025.602c-17.067%200-27.73%208.53-32%2025.597%206.398-8.531%2013.867-11.73%2022.398-9.597%204.871%201.214%208.352%204.746%2012.207%208.66C72.883%2056.629%2080.145%2064%2096.004%2064c17.066%200%2027.73-8.531%2032-25.602-6.399%208.536-13.867%2011.735-22.399%209.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004%2064c-17.066%200-27.73%208.531-32%2025.602C6.402%2081.066%2013.87%2077.867%2022.402%2080c4.871%201.215%208.352%204.746%2012.207%208.66%206.274%206.367%2013.536%2013.738%2029.395%2013.738%2017.066%200%2027.73-8.53%2032-25.597-6.399%208.531-13.867%2011.73-22.399%209.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128%2071.371%2047.868%2064%2032.004%2064zm0%200'%20fill='%2338bdf8'/%3e%3c/svg%3e" alt="GitHub" />
                <img src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width=%27800px%27%20height=%27800px%27%20viewBox=%270%200%2032%2032%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3ctitle%3efile_type_js%3c/title%3e%3cpath%20d=%27M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z%27%20style=%27fill:%23f5de19%27/%3e%3c/svg%3e" alt="Live" />
              </div>
              <a href="#" className="projects-section-card-btn">View Project</a>
            </div>
          </article>

          <article ref={proj1Ref} className={`projects-section-card project-card-left ${proj1Visible ? 'visible' : ''}`}>
            <div className="projects-section-card-image">
              <img src={aiHelmetDetection} alt="AI Helmet Detection System" />
            </div>
            <div className="projects-section-card-body">
              <div className="projects-section-card-title">AI Helmet Detection System</div>
              <div className="projects-section-card-subtitle">AI&ML based Web App</div>
              <div className="projects-section-card-desc">AI-powered helmet detection with wear-time tracking, streaks, and rewards.</div>
              <div className="projects-section-card-icons">
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-11.5%20-10.23174%2023%2020.46348'%3e%3ctitle%3eReact%20Logo%3c/title%3e%3ccircle%20cx='0'%20cy='0'%20r='2.05'%20fill='%2361dafb'/%3e%3cg%20stroke='%2361dafb'%20stroke-width='1'%20fill='none'%3e%3cellipse%20rx='11'%20ry='4.2'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(60)'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(120)'/%3e%3c/g%3e%3c/svg%3e" alt="GitHub" />
                <img src="https://freepngimg.com/thumb/android/72537-icons-python-programming-computer-social-tutorial.png" alt="Live" />
              </div>
              <a href="https://github.com/pavan050505/AI-Helmet-Detection-System/tree/main" className="projects-section-card-btn">View Project</a>
            </div>
          </article>

          <article ref={proj5Ref} className={`projects-section-card project-card-middle ${proj5Visible ? 'visible' : ''}`}>
            <div className="projects-section-card-image">
              <img src={EMSimg} alt="EMS" />
            </div>
            <div className="projects-section-card-body">
              <div className="projects-section-card-title">EventSphere</div>
              <div className="projects-section-card-subtitle">React based Web App</div>
              <div className="projects-section-card-desc">SaaS-style event management platform with a modern UI.</div>
              <div className="projects-section-card-icons">
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-11.5%20-10.23174%2023%2020.46348'%3e%3ctitle%3eReact%20Logo%3c/title%3e%3ccircle%20cx='0'%20cy='0'%20r='2.05'%20fill='%2361dafb'/%3e%3cg%20stroke='%2361dafb'%20stroke-width='1'%20fill='none'%3e%3cellipse%20rx='11'%20ry='4.2'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(60)'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(120)'/%3e%3c/g%3e%3c/svg%3e" alt="Live" />
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M64.004%2025.602c-17.067%200-27.73%208.53-32%2025.597%206.398-8.531%2013.867-11.73%2022.398-9.597%204.871%201.214%208.352%204.746%2012.207%208.66C72.883%2056.629%2080.145%2064%2096.004%2064c17.066%200%2027.73-8.531%2032-25.602-6.399%208.536-13.867%2011.735-22.399%209.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004%2064c-17.066%200-27.73%208.531-32%2025.602C6.402%2081.066%2013.87%2077.867%2022.402%2080c4.871%201.215%208.352%204.746%2012.207%208.66%206.274%206.367%2013.536%2013.738%2029.395%2013.738%2017.066%200%2027.73-8.53%2032-25.597-6.399%208.531-13.867%2011.73-22.399%209.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128%2071.371%2047.868%2064%2032.004%2064zm0%200'%20fill='%2338bdf8'/%3e%3c/svg%3e" alt="GitHub" />
              </div>
              <a href="https://github.com/pavan050505/eventsphere-frontend" className="projects-section-card-btn">View Project</a>
            </div>
          </article>

          <article ref={proj2Ref} className={`projects-section-card project-card-middle ${proj2Visible ? 'visible' : ''}`}>
            <div className="projects-section-card-image">
              <img src={roadSafety} alt="RoadSafety Analytics" />
            </div>
            <div className="projects-section-card-body">
              <div className="projects-section-card-title">RoadSafety Analytics</div>
              <div className="projects-section-card-subtitle">Machine Learning Model and Flask Web App</div>
              <div className="projects-section-card-desc">AI-powered accident detection and analysis for improved road safety.</div>
              <div className="projects-section-card-icons">
                <img src="https://freepngimg.com/thumb/android/72537-icons-python-programming-computer-social-tutorial.png" alt="GitHub" />
                <img src="https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png" alt="Live" />
              </div>
              <a href="https://github.com/pavan050505/intelligent-traffic-monitoring-system?tab=readme-ov-file" className="projects-section-card-btn">View Project</a>
            </div>
          </article>

          <article ref={proj4Ref} className={`projects-section-card project-card-left ${proj4Visible ? 'visible' : ''}`}>
            <div className="projects-section-card-image">
              <img src={nineMR} alt="9MR" />
            </div>
            <div className="projects-section-card-body">
              <div className="projects-section-card-title">9 Million Records</div>
              <div className="projects-section-card-subtitle">javascript</div>
              <div className="projects-section-card-desc">A professional website for a private music studio 9MR.</div>
              <div className="projects-section-card-icons">
                <img src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width=%27800px%27%20height=%27800px%27%20viewBox=%270%200%2032%2032%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3ctitle%3efile_type_js%3c/title%3e%3cpath%20d=%27M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z%27%20style=%27fill:%23f5de19%27/%3e%3c/svg%3e" alt="GitHub" />
                <img src="https://portfolio-tush.vercel.app/assets/css-hOWc99lL.svg" alt="Live" />
              </div>
              <a href="https://github.com/pavan050505/9million-records" className="projects-section-card-btn">View Project</a>
            </div>
          </article>

          <article ref={proj3Ref} className={`projects-section-card project-card-right ${proj3Visible ? 'visible' : ''}`}>
            <div className="projects-section-card-image">
              <img src={portfolio} alt="Portfolio Website" />
            </div>
            <div className="projects-section-card-body">
              <div className="projects-section-card-title">Portfolio Website</div>
              <div className="projects-section-card-subtitle">React.js</div>
              <div className="projects-section-card-desc">Personal portfolio website to showcase projects and skills.</div>
              <div className="projects-section-card-icons">
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-11.5%20-10.23174%2023%2020.46348'%3e%3ctitle%3eReact%20Logo%3c/title%3e%3ccircle%20cx='0'%20cy='0'%20r='2.05'%20fill='%2361dafb'/%3e%3cg%20stroke='%2361dafb'%20stroke-width='1'%20fill='none'%3e%3cellipse%20rx='11'%20ry='4.2'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(60)'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(120)'/%3e%3c/g%3e%3c/svg%3e" alt="GitHub" />
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M64.004%2025.602c-17.067%200-27.73%208.53-32%2025.597%206.398-8.531%2013.867-11.73%2022.398-9.597%204.871%201.214%208.352%204.746%2012.207%208.66C72.883%2056.629%2080.145%2064%2096.004%2064c17.066%200%2027.73-8.531%2032-25.602-6.399%208.536-13.867%2011.735-22.399%209.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004%2064c-17.066%200-27.73%208.531-32%2025.602C6.402%2081.066%2013.87%2077.867%2022.402%2080c4.871%201.215%208.352%204.746%2012.207%208.66%206.274%206.367%2013.536%2013.738%2029.395%2013.738%2017.066%200%2027.73-8.53%2032-25.597-6.399%208.531-13.867%2011.73-22.399%209.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128%2071.371%2047.868%2064%2032.004%2064zm0%200'%20fill='%2338bdf8'/%3e%3c/svg%3e" alt="Live" />
              </div>
              <a href="#" className="projects-section-card-btn">View Project</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
