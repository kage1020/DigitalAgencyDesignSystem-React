import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ModalDialogProvider from './providers/modal-dialog';
import DrawerProvider from './providers/drawer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalDialogProvider>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </ModalDialogProvider>
  </React.StrictMode>
);
