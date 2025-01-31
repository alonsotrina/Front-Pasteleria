import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import LoginProvider from "./context/LoginContext.jsx";
import '../src/assets/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LoginProvider>
     <Router>
      <App />
    </Router>
     </LoginProvider>
  </React.StrictMode>,
)
