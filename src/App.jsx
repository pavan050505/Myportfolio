import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AboutExtras from './components/AboutExtras'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Work from './components/Work'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AboutExtras />
        <Skills />
        <Projects />
        <Contact />
        <Work />
        <Footer />
      </main>
      <Analytics />
    </div>
  )
}
