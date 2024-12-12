import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CabinProvider } from './features/cabins/ContextCabin.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CabinProvider>
    <App />
    </CabinProvider>
  </React.StrictMode>,
)
