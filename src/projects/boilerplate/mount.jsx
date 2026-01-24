import React from 'react'
import ReactDOM from 'react-dom/client'
import ExamplePage from './ExamplePage'
import '../../index.css' // Import global Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExamplePage />
  </React.StrictMode>,
)
