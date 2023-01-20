import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import invariant from 'tiny-invariant'

const root = document.getElementById('root')
invariant(root, 'root element not found')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
