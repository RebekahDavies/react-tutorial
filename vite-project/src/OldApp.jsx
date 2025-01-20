import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function OldApp() {
  const [count, setCount] = useState(0)
  const tab = 0;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>Why do we like react?</h2>
        <p>It's declaritive</p>
        <h2>But whats the difference between declaritive and imparitive?</h2>
        <h3>Declaritive:</h3>
        <p>We tell react what we want done, it does it for us</p>
        <h3>Imparitive:</h3>
        <p>We tell something what we want done and how we want it done</p>
      </div>
    </>
  )
}

export default OldApp
