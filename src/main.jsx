import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Allmain from './components/Allmain'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Allmain />
  </React.StrictMode>,
  </BrowserRouter>
)
