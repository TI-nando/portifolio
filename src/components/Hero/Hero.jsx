import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Desenvolvedor Web - Full-Stack';

  useEffect(() => {
    let currentText = '';
    let i = 0;
    const speed = 100;

    const type = () => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setDisplayText(currentText);
        i++;
        setTimeout(type, speed);
      }
    };

    setTimeout(type, 1000);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Olá, Bem-Vindo! Eu sou</span>
            <span className="hero-name">Fernando Henrique Silva</span>
            <span className="hero-role">{displayText}</span>
          </h1>
          <p className="hero-description">
            Criando experiências digitais incríveis com código limpo e design moderno.
          </p>
          <div className="hero-buttons">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              Ver Projetos
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Entrar em Contato
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;