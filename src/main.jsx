import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Rotas from './Routes/Rotas'
import './styles/main.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Rotas />
  </React.StrictMode>,
)
