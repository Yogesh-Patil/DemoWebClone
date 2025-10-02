import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import TargetReacher from './TargetReacher'
import apiClient from '../../api/apiClient'

vi.mock('../../api/apiClient', () => {
  return {
    default: {
      get: vi.fn(() => Promise.resolve({ data: { target: 'Launch', progress: 72, eta: '2 days' } }))
    }
  }
})

test('renders target data from API', async () => {
  render(<TargetReacher />)
  await waitFor(() => expect(screen.getByText(/Launch/)).toBeInTheDocument())
  expect(screen.getByText('72% complete')).toBeInTheDocument()
})
