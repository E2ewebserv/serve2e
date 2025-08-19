// React Router v6 - 301 Redirect Example

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const OldPage = () => {
  // This component immediately redirects from /old-page to /new-page with replace (like 301)
  return <Navigate to="/new-page" replace />;
};

const NewPage = () => {
  return <h1>Welcome to the New Page</h1>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/old-page" element={<OldPage />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;

