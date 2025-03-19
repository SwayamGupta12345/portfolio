import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbot from './navbot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbot/>
    <App />
  </StrictMode>,
)
