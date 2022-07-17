import { render, screen } from '@testing-library/react'
import { FirstPostPage } from '../../stories/pages/posts/first-post.stories'
import '@testing-library/jest-dom'

describe('First Post', () => {
  it('renders a heading', () => {
    render(<FirstPostPage />)

    const heading = screen.getByRole('heading', {
      name: /First Post/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a link to home page', () => {
    render(<FirstPostPage />)

    const link = screen.getByRole('link', {
      name: /Back to Home Page/i,
    })

    expect(link).toBeInTheDocument()
  })

  it('can link to home page normally', () => {
    render(<FirstPostPage />)

    const link = screen.getByRole('link', {
      name: /Back to Home Page/i,
    })

    expect(link).toHaveAttribute('href', '/')
  })
})