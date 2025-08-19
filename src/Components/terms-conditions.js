import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footer from '../Header&Footer/Footer';
import './terms.css';

export default function TERMSCONDITIONS() {

   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
   }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
    
      <section id="terms">
        <div className="container">
          
          <h1 style={{ color: 'blue' }}>ServiceE2E Terms and Conditions</h1>
          
          <h2 style={{ color: 'blue' }}>Service Scope:</h2>
          <p style={{ color: 'black' }}>
            ServiceE2E provides professional maintenance and repair services to residential and commercial customers. Our services include installation, routine maintenance, troubleshooting, repairs, and part replacements.
          </p>

          <h2 style={{ color: 'blue' }}>Service Appointment:</h2>
          <p style={{ color: 'black' }}>
            Customers can schedule service appointments through our website, or by contacting our customer service team. We strive to accommodate appointment requests promptly, subject to availability.
          </p>

          <h2 style={{ color: 'blue' }}>Service Fees:</h2>
          <p style={{ color: 'black' }}>
            Service fees for maintenance, repairs, and installations are determined based on the scope of work required. Detailed pricing information is provided upfront to customers before service commencement.
          </p>

          <h2 style={{ color: 'blue' }}>Service Warranty:</h2>
          <p style={{ color: 'black' }}>
            We offer a warranty on our repair services, covering parts and labor for a specified period. Warranty terms may vary depending on the type of service provided and are communicated to customers beforehand.
          </p>

          <h2 style={{ color: 'blue' }}>Customer Responsibilities:</h2>
          <p style={{ color: 'black' }}>
            Customers are responsible for providing accurate information about their Appliances and any existing issues. Access to the Appliances and related equipment must be provided to our service technicians during scheduled appointments.
          </p>

          <h2 style={{ color: 'blue' }}>Service Quality:</h2>
          <p style={{ color: 'black' }}>
            ServiceE2E is committed to delivering high-quality Home Appliance Services using industry best practices and skilled technicians. We strive to ensure customer satisfaction by addressing service concerns promptly and professionally.
          </p>

          <h2 style={{ color: 'blue' }}>Liability Disclaimer:</h2>
          <p style={{ color: 'black' }}>
            While we take utmost care in servicing Home appliances, ServiceE2E is not liable for any damages caused by pre-existing issues, misuse, or negligence. Customers are encouraged to report any concerns regarding service quality or damages immediately for resolution.
          </p>


          <h2 style={{ color: 'blue' }}>Confidentiality:</h2>
          <p style={{ color: 'black' }}>
            ServiceE2E respects customer privacy and ensures that any personal information shared during service appointments is kept confidential.
          </p>

          <h2 style={{ color: 'blue' }}>Governing Law:</h2>
          <p style={{ color: 'black' }}>
            These terms and conditions are governed by the laws, and any disputes shall be resolved through arbitration or mediation.
          </p>

        </div>
      </section>

      <div><Footer /></div>
    </>
  );
}
