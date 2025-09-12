import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

describe('Header Component', () => {
  test('renders navigation logo', () => {
    render(<Header activeSection="home" />)
    expect(screen.getByText('Fernando Silva')).toBeInTheDocument()
  })

  test('renders all navigation links', () => {
    render(<Header activeSection="home" />)
    
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Projetos')).toBeInTheDocument()
    expect(screen.getByText('Habilidades')).toBeInTheDocument()
    expect(screen.getByText('Formação')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  test('applies active class to current section', () => {
    render(<Header activeSection="about" />)
    
    const aboutLink = screen.getByText('Sobre')
    expect(aboutLink).toHaveClass('active')
  })

  test('toggles mobile menu when hamburger is clicked', () => {
    render(<Header activeSection="home" />)
    
    const navToggle = document.querySelector('.nav-toggle')
    const navMenu = document.querySelector('.nav-menu')
    
    expect(navMenu).not.toHaveClass('active')
    
    fireEvent.click(navToggle)
    expect(navMenu).toHaveClass('active')
    
    fireEvent.click(navToggle)
    expect(navMenu).not.toHaveClass('active')
  })
})