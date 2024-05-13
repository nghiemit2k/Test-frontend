import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";

import HomePage from './components/Home/Homepage.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} >
          <Route index element={<Login />} />
        </Route>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
