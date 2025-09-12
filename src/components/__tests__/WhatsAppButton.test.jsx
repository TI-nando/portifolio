import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import WhatsAppButton from '../WhatsAppButton'

// Mock window.open
const mockOpen = jest.fn()
Object.defineProperty(window, 'open', {
  value: mockOpen,
  writable: true
})

describe('WhatsAppButton Component', () => {
  beforeEach(() => {
    mockOpen.mockClear()
  })

  test('renders WhatsApp button', () => {
    render(<WhatsAppButton />)
    
    const button = screen.getByRole('button', { name: /entrar em contato via whatsapp/i })
    expect(button).toBeInTheDocument()
  })

  test('opens WhatsApp when clicked', () => {
    render(<WhatsAppButton />)
    
    const button = screen.getByRole('button', { name: /entrar em contato via whatsapp/i })
    fireEvent.click(button)
    
    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/'),
      '_blank'
    )
  })

  test('becomes visible when scrolled down', () => {
    render(<WhatsAppButton />)
    
    const buttonContainer = document.querySelector('.whatsapp-button')
    expect(buttonContainer).not.toHaveClass('visible')
    
    // Simulate scroll
    Object.defineProperty(window, 'pageYOffset', {
      value: 400,
      writable: true
    })
    
    fireEvent.scroll(window)
    expect(buttonContainer).toHaveClass('visible')
  })
})