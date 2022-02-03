import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import finalStore from './Store/CentralStore'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={finalStore}>

        <App />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


