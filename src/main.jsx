import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';
import { rootreducer } from './store/store.jsx';
const store = legacy_createStore(rootreducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
