import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import {About,Register,Schedule,Speakers,SustainAfrica,Travel} from "./components/pages/summit"
import {NavbarSection} from "./components"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarSection/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/schedule" element={<Schedule/>} />
      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/sustainAfrica" element={<SustainAfrica/>} />
      <Route path="/travel" element={<Travel/>} />

    </Routes>
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
