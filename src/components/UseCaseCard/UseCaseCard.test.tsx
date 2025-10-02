import React from 'react'
import { render, screen } from '@testing-library/react'
import UseCaseCard from './UseCaseCard'

test('renders usecase card with title and description', () => {
  render(<UseCaseCard title='Payments' description='Secure payments' />)
  expect(screen.getByText('Payments')).toBeInTheDocument()
  expect(screen.getByText('Secure payments')).toBeInTheDocument()
})
