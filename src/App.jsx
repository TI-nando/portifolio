import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
=======
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
>>>>>>> 7e1adcfb52e2d6560d8cba620c02218a7b07a6a6

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id')
        }
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App