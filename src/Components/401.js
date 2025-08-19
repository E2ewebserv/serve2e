// src/pages/Unauthorized401.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './401.css';

const Unauthorized401 = () => {
  return (
    <div className="unauthorized-container">
      <Helmet>
        <title>401 Unauthorized | YourSiteName</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1>401</h1>
      <p>You must be logged in to access this page.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Unauthorized401;
