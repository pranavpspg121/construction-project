import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaFortAwesome, FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import { useAuth } from "../context/AuthContext";

const Navigation = () => {

  /* ============================= */
  /* THEME STATE */
  /* ============================= */

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  /* ============================= */
  /* USER AUTH STATE */
  /* ============================= */

  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  const { user, logout } = useAuth();

  /* ============================= */
  /* APPLY THEME TO BODY */
  /* ============================= */

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

  /* ============================= */
  /* CHECK LOGGED USER */
  /* ============================= */

  // useEffect(() => {
  //   const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //   setUser(loggedUser);
  // }, []);

  /* ============================= */
  /* LOGOUT FUNCTION */
  /* ============================= */

  // const handleLogout = () => {
  //   localStorage.removeItem("loggedInUser");
  //   setUser(null);
  //   navigate("/");
  // };
  const handleLogout = () => {
  logout();
  navigate("/");
};

  return (
    <nav className={`navbar navbar-expand-lg py-3 sticky-top transparent-navbar ${isDark ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container-fluid px-4">

        {/* BRAND */}
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <div className={`brand-icon-container me-2 ${isDark ? 'icon-dark' : 'icon-light'}`}>
            <FaFortAwesome size={22} />
          </div>
          <span className={`brand-name ${isDark ? 'text-white' : 'text-dark'}`}>
            STRONGHOLD
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* CENTER MENU */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {['Home', 'About', 'Services', 'Projects', 'Contact', 'Careers'].map((item) => (
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

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">

            {/* THEME TOGGLE */}
            <button
              className={`btn theme-toggle-btn border-0 ${isDark ? 'text-white' : 'text-dark'}`}
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* AUTH SECTION */}
            {user ? (
              /* ===== USER DROPDOWN ===== */
              <div className="dropdown">
                <button
                  className={`btn dropdown-toggle d-flex align-items-center gap-2 ${isDark ? 'text-white' : 'text-dark'}`}
                  data-bs-toggle="dropdown"
                >
                  <FaUserAlt size={14} />
                  {user.name}
                </button>

                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <strong>{user.name}</strong>
                    <br />
                    <small>{user.email}</small>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              /* ===== LOGIN / REGISTER ===== */
              <>
                <Link
                  to="/login"
                  className={`login-btn d-flex align-items-center gap-2 text-decoration-none ${isDark ? 'text-white' : 'text-dark'}`}
                >
                  <FaUserAlt size={14} />
                  <span>Login</span>
                </Link>

                <Link
                  to="/register"
                  className="btn btn-warning fw-bold px-4 py-2 border-0 shadow-sm"
                >
                  Register
                </Link>
              </>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;