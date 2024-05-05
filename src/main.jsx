import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';
import { rootreducer } from './store/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={rootreducer} >
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
