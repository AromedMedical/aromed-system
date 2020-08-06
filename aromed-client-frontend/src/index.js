import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

import 'bootstrap/dist/css/bootstrap.css'

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);