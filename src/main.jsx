import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CabinProvider } from './features/cabins/ContextCabin.jsx';
import Modal from './ui/Modal.jsx';
import Menus from './ui/Menus.jsx';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <DarkModeProvider>
    <Modal>
      <Menus>
        <CabinProvider>
          <App />
        </CabinProvider>
      </Menus>
    </Modal>
    </DarkModeProvider>
  </React.StrictMode>,
);