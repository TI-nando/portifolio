import React, { useState, useEffect } from 'react'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <nav className="nav">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
            Fernando Silva
          </a>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a 
                  href="#home" 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '#home')}
                >
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#about" 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '#about')}
                >
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#projects" 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '#projects')}
                >
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#skills" 
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '#skills')}
                >
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#education" 
                  className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '#education')}
                >
                  Formação
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#contact" 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
            id="nav-toggle"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header