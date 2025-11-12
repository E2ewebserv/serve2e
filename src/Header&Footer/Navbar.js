// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../images/serv-e2e.png';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand d-flex align-items-center brand-shine" to="/">
//           <img src={logo} alt="Logo" className="navbar-logo" />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav nav-center w-100 mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/">Home</Link>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 onClick={(e) => e.preventDefault()} // ✅ Fix for mobile dropdown
//               >
//                 Services
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><Link className="dropdown-item" to="/washing-machine-service">Washing Machine</Link></li>
//                 <li><Link className="dropdown-item" to="/fridge-service">Fridge Service</Link></li>
//                 <li><Link className="dropdown-item" to="/ac-service">AC Service</Link></li>
//                 <li><Link className="dropdown-item" to="/tv-service">TV Service</Link></li>
//                 <li><Link className="dropdown-item" to="/microwave-oven-service">Microwave Oven</Link></li>
//                 <li><Link className="dropdown-item" to="/water-heater-service">Water Heater</Link></li>
//                 <li><Link className="dropdown-item" to="/water-purifier-service">Water Purifier</Link></li>
//                <li><Link className="dropdown-item" to="/productlist">Products</Link></li>
             
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// } 






import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // for Services dropdown

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="brand">
              <span className="chunk orange">SERV</span>&nbsp;
              <span className="chunk red">E</span>
              <span className="chunk blue">2</span>
              <span className="chunk orange">E</span>
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
            <ul className="navbar-nav nav-center w-100 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/spare-price-list">Spare Parts Price</Link>
              </li>

              <li className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}>
                {/* Use button to toggle dropdown */}
                <button
                  className="nav-link dropdown-toggle btn"
                  onClick={toggleDropdown}
                >
                  Services
                </button>
                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <li>
                    <Link className="dropdown-item" to="/washing-machine-service" onClick={() => setDropdownOpen(false)}>Washing Machine</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fridge-service" onClick={() => setDropdownOpen(false)}>Fridge Service</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ac-service" onClick={() => setDropdownOpen(false)}>AC Service</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tv-service" onClick={() => setDropdownOpen(false)}>TV Service</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/microwave-oven-service" onClick={() => setDropdownOpen(false)}>Microwave Oven</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/water-heater-service" onClick={() => setDropdownOpen(false)}>Water Heater</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/water-purifier-service" onClick={() => setDropdownOpen(false)}>Water Purifier</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/amc">AMC Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <section className="highlight-strip">
          <div className="scroll-container">
            <div className="scroll-track">
              <div className="scroll-content">
                🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
                🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
                🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
                🛠️ Up to-1 Year Spare Warranty
              </div>
              <div className="scroll-content">
                🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
                🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
                🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
                🛠️ Up to-1 Year Spare Warranty
              </div>
              <div className="scroll-content">
                🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
                🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
                🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
                🛠️ Up to-1 Year Spare Warranty
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
