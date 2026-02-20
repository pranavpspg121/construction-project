import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFortAwesome, FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';

const Navigation = () => {
  // Theme state: true for Black (Dark), false for White (Light)
const [isDark, setIsDark] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});


  // This ensures the theme change applies to the WHOLE body, not just the navbar
 useEffect(() => {
  const body = document.body;

  body.classList.remove('dark-theme', 'light-theme');

  if (isDark) {
    body.classList.add('dark-theme');
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.add('light-theme');
    localStorage.setItem("theme", "light");
  }
}, [isDark]);


  return (
    <nav className={`navbar navbar-expand-lg py-3 sticky-top transparent-navbar ${isDark ? 'navbar-dark' : 'navbar-light'}`}>

      <div className="container-fluid px-4">
        
        {/* Stronghold Brand */}
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <div className={`brand-icon-container me-2 ${isDark ? 'icon-dark' : 'icon-light'}`}>
            <FaFortAwesome size={22} />
          </div>
          <span className={`brand-name ${isDark ? 'text-white' : 'text-dark'}`}>STRONGHOLD</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <li className="nav-item px-2" key={item}>
                <NavLink 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) => 
                    `nav-link custom-link ${isActive ? 'active-underline' : ''}`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3">
            {/* Theme Toggle */}
            <button 
              className={`btn theme-toggle-btn border-0 ${isDark ? 'text-white' : 'text-dark'}`}
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            
            <Link to="/login" className={`login-btn d-flex align-items-center gap-2 text-decoration-none ${isDark ? 'text-white' : 'text-dark'}`}>
              <FaUserAlt size={14} />
              <span>Login</span>
            </Link>
            
            {/* REGISTER BUTTON - Now in Yellow */}
            <Link to="/register" className="btn btn-warning fw-bold px-4 py-2 border-0 shadow-sm">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;