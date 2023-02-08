import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import  {News}  from "./components/News";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from './components/Login';

const root = ReactDOM.createRoot(document.getElementById("root"));
const isLoggedIn = localStorage.getItem('authenticated');
console.log(isLoggedIn);
root.render(
  <BrowserRouter>
  <App/>
    <Routes>
        <Route exact path="/" element={isLoggedIn? <Home/>: <Navigate to='/login'/>} />
        <Route path="/news" element={isLoggedIn? <News/>:  <Navigate to='/login'/>} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
