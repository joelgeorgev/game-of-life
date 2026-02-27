import './App.css'

import github from './assets/github.svg'

export const App = () => (
  <main className='main'>
    <header className='header'>
      <h1>Game of Life</h1>
    </header>
    <section className='section'>
      <article></article>
    </section>
    <footer className='footer'>
      <a href='https://github.com/joelgeorgev/game-of-life'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </footer>
  </main>
)
