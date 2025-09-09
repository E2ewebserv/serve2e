import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// ✅ Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Create a wrapper component to initialize AOS
function AppWithAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      offset: 120,     // offset before animation triggers
      once: true       // animation runs once
    });
  }, []);

  return <App />;
}

// ✅ Render with AOS
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithAOS />
  </React.StrictMode>
);

// Optional performance logging
reportWebVitals();
