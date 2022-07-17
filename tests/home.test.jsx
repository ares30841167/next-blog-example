import { render, screen } from '@testing-library/react'
import { HomePage } from '../stories/pages/home.stories'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})