import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dashboard Responsivo",
      description: "Dashboard moderno e responsivo, adaptado para diferentes dispositivos com interface intuitiva e métricas em tempo real.",
      image: "src/img/dash.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://ti-nando.github.io/dashbord/",
      repoUrl: "https://github.com/TI-nando/dashbord"
    },
    {
      id: 2,
      title: "Aplicativo de Clima",
      description: "Aplicativo que consome API externa para previsões meteorológicas em tempo real com interface limpa e responsiva.",
      image: "src/img/clima.png",
      technologies: ["React.js", "API REST", "CSS3"],
      liveUrl: "https://ti-nando.github.io/appClima/",
      repoUrl: "https://github.com/TI-nando/appClima"
    },
    {
      id: 3,
      title: "Agência XYZ",
      description: "Landing page institucional com foco em UI/UX, otimizada para conversão e experiência do usuário.",
      image: "src/img/agencia.png",
      technologies: ["HTML5", "CSS3", "UX/UI"],
      liveUrl: "https://ti-nando.github.io/agencia-xpto",
      repoUrl: "https://github.com/TI-nando/agencia-xpto"
    },
    {
      id: 4,
      title: "Projeto One Piece",
      description: "Página interativa com animações e efeitos visuais inspirada no universo One Piece.",
      image: "src/img/onepiece.png",
      technologies: ["JavaScript", "CSS3", "Animações"],
      liveUrl: "https://ti-nando.github.io/projeto-one-piece/",
      repoUrl: "https://github.com/TI-nando/projeto-one-piece"
    },
    {
      id: 5,
      title: "Cafeteria",
      description: "Site responsivo para rede de cafeterias com sistema de cardápio interativo e interface moderna.",
      image: "src/img/cafeteria.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://ti-nando.github.io/cafeteria/",
      repoUrl: "https://github.com/TI-nando/cafeteria"
    },
    {
      id: 6,
      title: "Projeto GitHub",
      description: "Projeto foi criado uma aplicação web que utiliza a GitHub API para buscar informações públicas de usuários, seus dados, seguidores, repositórios e eventos recentes.",
      image: "src/img/github.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "API"],
      liveUrl: "https://ti-nando.github.io/github",
      repoUrl: "https://github.com/TI-nando/github"
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver Projeto
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects