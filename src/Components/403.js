// src/pages/Forbidden403.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../Components/403.css';

const Forbidden403 = () => {
  return (
    <div className="forbidden-container">
      <Helmet>
        <title>403 Forbidden</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1>403</h1>
      <p>This Page Is Under Maintaince, Viwe Our Another Services.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default Forbidden403;
