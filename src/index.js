import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import all required stuff
import './assets/scss/argon.scss';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/animate.css/animate.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
