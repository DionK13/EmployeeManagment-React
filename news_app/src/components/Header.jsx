import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import App from "../App";
import { LoginForm } from "./Login";

export const Header = (props) => {
  const location = useLocation();
  const [logout, setLogout] = useState();
  const LogoutFunc = () => {
    setLogout(true);
    localStorage.setItem("authenticated", false);
  };
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          EMS
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className={`nav-item ${location.pathname === "/" && "active"}`}>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/news" && "active"
              }`}
            >
              <Link className='nav-link' to='/news'>
                News
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/login" && "active"
              }`}
            >
              {props.auth === "true" ? (
                <Link className='nav-link' onClick={LogoutFunc}>
                  Logout
                </Link>
              ) : (
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
