import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OrcamentoProvider } from './context/OrcamentoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrcamentoProvider>
    <App />
    </OrcamentoProvider>
  </React.StrictMode>,
)
