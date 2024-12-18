import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routers'
import './globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
