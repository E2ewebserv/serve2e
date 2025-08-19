import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footer from '../Header&Footer/Footer';
import './privacy.css';

export default function PRIVACYPOLICY() {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
   }, []);
    
  return (
    <>
      <div>
        <Navbar />
      </div>

      <section id="privacy">
        <div className="container">

          <h1 style={{ color: 'blue' }}>ServiceE2E Privacy Policy</h1>
          
          <h2 style={{ color: 'blue' }}>Introduction:</h2>
          <p style={{ color: 'black' }}>
            ServiceE2E (“we” or “us”) is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
          </p>

          <h2 style={{ color: 'blue' }}>Information We Collect:</h2>
          <h3 style={{ color: 'blue' }}>Personal Information:</h3>
          <p style={{ color: 'black' }}>
            We may collect personal information such as your name, phone number, and address when you fill out forms or contact us.
          </p>
          <h3 style={{ color: 'blue' }}>Usage Data:</h3>
          <p style={{ color: 'black' }}>
            We gather information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on each page.
          </p>
          <h3 style={{ color: 'blue' }}>Cookies and Tracking Technologies:</h3>
          <p style={{ color: 'black' }}>
            We use cookies and similar technologies to analyze trends, administer the website, track users’ movements, and gather demographic information.
          </p>

          <h2 style={{ color: 'blue' }}>How We Use Your Information:</h2>
          <p style={{ color: 'black' }}>
            We may use the information we collect for various purposes, including:
          </p>
          <ul style={{ color: 'black' }}>
            <li>Providing and maintaining our website and services.</li>
            <li>Improving and personalizing your user experience.</li>
            <li>Communicating with you and responding to your inquiries.</li>
            <li>Marketing and advertising our products and services.</li>
            <li>Complying with legal obligations.</li>
          </ul>

          <h2 style={{ color: 'blue' }}>Data Security:</h2>
          <p style={{ color: 'black' }}>
            We take extensive measures to ensure the security and confidentiality of your data. Our systems are protected with advanced security protocols and encryption technologies to safeguard your information.
          </p>

          <h2 style={{ color: 'blue' }}>Data Sharing and Disclosure:</h2>
          <p style={{ color: 'black' }}>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy or as required by law.
          </p>

          <h2 style={{ color: 'blue' }}>Your Rights and Choices:</h2>
          <p style={{ color: 'black' }}>
            You have the right to access, update, or delete your personal information. You may also opt-out of receiving marketing communications from us at any time.
          </p>

          <h2 style={{ color: 'blue' }}>Children's Privacy:</h2>
          <p style={{ color: 'black' }}>
            Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children without parental consent.
          </p>

          <h2 style={{ color: 'blue' }}>Changes to This Privacy Policy:</h2>
          <p style={{ color: 'black' }}>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and we encourage you to review this policy periodically for updates.
          </p>

          <h2 style={{ color: 'blue' }}>Contact Us:</h2>
          <p style={{ color: 'black' }}>
            If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at:
          </p>
          <p style={{ color: 'black' }}>
            +91 9790006791
          </p>
          
        </div>
      </section>

      <div><Footer/></div>
    </>
  );
}
