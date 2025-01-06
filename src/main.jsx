import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CabinProvider } from './features/cabins/ContextCabin.jsx'
import { Modal } from './ui/Modal.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Modal>
  <CabinProvider>
    <App />
    </CabinProvider>
    </Modal>
  </React.StrictMode>,
)
