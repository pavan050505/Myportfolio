import React from 'react'
import './SkillsGrid.css'

export default function SkillsGrid() {
  const skills = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap' },    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VS Code' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
  ]

  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="box">
          <img src={skill.src} alt={skill.name} />
        </div>
      ))}
    </div>
  )
}
