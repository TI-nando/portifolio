import React from 'react'

const Education = () => {
  const academicEducation = [
    {
      id: 1,
      period: "2019 - 2024",
      title: "Gestão em Tecnologia da Informação",
      institution: "IF Goiano"
    },
    {
      id: 2,
      period: "2018 - 2019",
      title: "Manutenção em Redes e Computadores",
      institution: "IF Goiano"
    }
  ]

  const courses = [
    {
      id: 1,
      period: "Em andamento",
      title: "DevQuest",
      institution: "Desenvolvimento Web Completo"
    },
    {
      id: 2,
      period: "2023",
      title: "JavaScript do Zero",
      institution: "Trybe"
    },
    {
      id: 3,
      period: "2023",
      title: "Curso Web Moderno",
      institution: "Udemy"
    },
    {
      id: 4,
      period: "2021 - 2022",
      title: "Desenvolvedor Full-Stack",
      institution: "Digital House"
    }
  ]

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Formação e Cursos</h2>
        <div className="education-content">
          <div className="education-category">
            <h3 className="education-category-title">Formação Acadêmica</h3>
            <div className="education-list">
              {academicEducation.map(item => (
                <div key={item.id} className="education-item">
                  <div className="education-date">{item.period}</div>
                  <div className="education-info">
                    <h4 className="education-title">{item.title}</h4>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-category">
            <h3 className="education-category-title">Cursos e Certificações</h3>
            <div className="education-list">
              {courses.map(item => (
                <div key={item.id} className="education-item">
                  <div className="education-date">{item.period}</div>
                  <div className="education-info">
                    <h4 className="education-title">{item.title}</h4>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education