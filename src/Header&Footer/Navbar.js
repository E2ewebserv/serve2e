import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/serv-e2e.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center brand-shine" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-center w-100 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()} // ✅ Fix for mobile dropdown
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/washing-machine-service">Washing Machine</Link></li>
                <li><Link className="dropdown-item" to="/fridge-service">Fridge Service</Link></li>
                <li><Link className="dropdown-item" to="/ac-service">AC Service</Link></li>
                <li><Link className="dropdown-item" to="/tv-service">TV Service</Link></li>
                <li><Link className="dropdown-item" to="/microwave-oven-service">Microwave Oven</Link></li>
                <li><Link className="dropdown-item" to="/water-heater-service">Water Heater</Link></li>
                <li><Link className="dropdown-item" to="/water-purifier-service">Water Purifier</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
