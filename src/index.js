import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { MainContext } from './context/MainContext';
import AuthContext from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HashRouter>
  <AuthContext>
    <MainContext>
      <App />
    </MainContext>
  </AuthContext>
</HashRouter>
);


