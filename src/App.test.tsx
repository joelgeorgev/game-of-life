import { render, screen } from '@testing-library/react'

import { App } from './App.tsx'

const renderApp = () => render(<App />)

describe('App', () => {
  test('renders a heading', () => {
    renderApp()

    expect(screen.getByRole('heading', { name: 'Game of Life' })).toBeDefined()
  })

  test('renders a link to the repository', () => {
    renderApp()

    const link: HTMLAnchorElement = screen.getByRole('link', {
      name: 'Go to GitHub repository page'
    })

    expect(link).toBeDefined()
    expect(link.href).toEqual('https://github.com/joelgeorgev/game-of-life')
  })
})
