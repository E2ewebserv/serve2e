import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/ac.css';
import ACHERO from '../images/ACHERO.jpg';
import ACMAN1 from '../images/ACMAN1.jpeg';
import PHONECALLPNG from '../images/PHONECALLPNG.png';
import EMAILPNG from '../images/EMAILPNG.png';
import ACPNG from '../images/ACPNG.png';
import WHATSAPPPNG from '../images/WHATSAPPPNG.png';
import { Helmet } from "react-helmet";

export default function ACSERVICE() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Best AC Service";
  }, []);

  return (
    <>
      

      <Navbar />

      <section id="headline">
        <div className="container">
          <div className="row">
            <div className="col-12">
                <h2>Professional AC Repair & Service in Tamil Nadu</h2>
            </div>
          </div>
        </div>
      </section>


         <section className="highlight-strip">
  <div className="scroll-container" direction="left">
    <div className="scroll-track">
      <div className="scroll-content">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to-1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
      <div className="scroll-content" direction="left">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to-1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
      <div className="scroll-content" direction="left">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to-1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </div>
</section>


      <section id="hero" style={{ backgroundImage: `url(${ACHERO})` }}>
        <div className="hero-content">
          <h1>WE ARE READY TO HELP</h1>
          <h3>Fast And Reliable Service</h3>
          <a href="tel:+919790006791" className="hero-btn">+91 97900 06791</a>
        </div>
      </section>


      <section id="start">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="line-container">
                <div className="line left-line"></div>
                <div className="star">&#9733;</div>
                <div className="line right-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="WRHY">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>We Are Ready To Help You</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="LIST">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Customer Care Helpline Support</h2>
           <ul>
          <li> <i class='fas fa-arrow-circle-right'></i>Book Your Complaints For Quality Service</li>
          <li> <i class='fas fa-arrow-circle-right'></i>We Aim to Complete Service on the Same Day</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Well Skill Trained Technicians</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Quality Service Affordable Price</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Door Step Service Center</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Trusted Professional Technicians</li>
           </ul>
   
              <h2>Issues In AC</h2>
              <ul>
                <li><i className="fas fa-arrow-circle-right"></i> AC On-Off Problem</li>
                <li><i className="fas fa-arrow-circle-right"></i> Noise in The AC</li>
                <li><i className="fas fa-arrow-circle-right"></i> AC No Cooling Problem</li>
                <li><i className="fas fa-arrow-circle-right"></i> AC Water Leak Problem</li>
                <li><i className="fas fa-arrow-circle-right"></i> AC Outdoor Unit Not Running</li>
                <li><i className="fas fa-arrow-circle-right"></i> AC Installation</li>
                <li><i className="fas fa-arrow-circle-right"></i> AC Uninstall</li>
              </ul>

              <h2>Types Of AC</h2>
              <ul>
                <li><i className="fas fa-arrow-circle-right"></i> Split AC Service</li>
                <li><i className="fas fa-arrow-circle-right"></i> Window AC Service</li>
                <li><i className="fas fa-arrow-circle-right"></i> Portable AC Service</li>
                <li><i className="fas fa-arrow-circle-right"></i> Wall AC Service</li>
                <li><i className="fas fa-arrow-circle-right"></i> Ceiling AC Service</li>
                <li><i className="fas fa-arrow-circle-right"></i> AC Service For Installation</li>
                <li><i className="fas fa-arrow-circle-right"></i> AC Service For Uninstall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="WRHY">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Why Choose Us?</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="WASHMANSIT">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={ACPNG}
                alt="AC service center"
                title="AC Service Center"
                className="img-fluid"
              />
             <p>We are a Fast and Reliable Air Conditioner Service Center. We handle all types of Split, Window, and Portable ACs with doorstep service across Tamil Nadu. Book your complaint for same-day service. We focus on quality service and use genuine spare parts to help maintain cooling performance and customer satisfaction.</p>

            </div>
          </div>
        </div>
      </section>

      <section id="STARS">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 text-center">
              <div className="star" id="STARRATE">&#9733;</div>
              <h5>Fast And Reliable Service</h5>
            </div>
            <div className="col-md-4 col-12 text-center">
              <div className="star" id="STARRATE">&#9733;</div>
              <h5>AC Service Center</h5>
            </div>
            <div className="col-md-4 col-12 text-center">
              <div className="star" id="STARRATE">&#9733;</div>
              <h5>Get Your Service Done the Same Day</h5>
            </div>
          </div>
        </div>
      </section>
{/* 
      <section id="WRHY">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Customer Testimonials</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="RATING">
        <div className="container">
          <div className="row">
           <div className="col-md-3 col-sm-12 mb-4" id="borders">
  <p>Excellent AC service. The technician arrived promptly and fixed the issue efficiently.</p>
  <center>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
  </center>
  <h5>Anbu</h5>
</div>

<div className="col-md-3 col-sm-12 mb-4" id="borders">
  <p>Very satisfied with the AC repair. Quick turnaround and friendly service.</p>
  <center>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
  </center>
  <h5>Meena</h5>
</div>

<div className="col-md-3 col-sm-12 mb-4" id="borders">
  <p>Prompt and reliable AC maintenance. Works perfectly now. Highly recommend!</p>
  <center>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
  </center>
  <h5>Arun</h5>
</div>

<div className="col-md-3 col-sm-12 mb-4" id="borders">
  <p>Great AC service. Technician explained everything clearly and provided a lasting fix.</p>
  <center>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
  </center>
  <h5>Priya</h5>
</div>

            <div className="col-12 mt-3">
              <p>
                With over 11 years of dedicated experience in the industry, our service center in Madurai
                is your trusted partner for all AC service needs. We deliver top-notch, reliable, and efficient services.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section id="ours">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Our Mission</h5>
           <p>
  Our mission is to deliver exceptional service through our expertise and dedication to customer satisfaction. We reduce inconvenience with prompt, professional water heater repairs and support.
</p>

            </div>
          </div>
        </div>
      </section>

      <section id="DESCWASH">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img
                src={ACMAN1}
                className="img-fluid"
                alt="AC service center"
                title="AC Service Center"
              />
            </div>
            <div className="col-md-6 col-12">
              <h3>AC Customer Support Service</h3>
              <ul>
                <li><strong>Technical Assistance:</strong> Troubleshoot common AC issues: settings, error codes, mechanical faults.</li>
                <li><strong>Installation Support:</strong> Guidance on proper AC installation, placement, HVAC connections.</li>
                <li><strong>Maintenance Advice:</strong> Cleaning filters, checking refrigerant, scheduling tune-ups for longevity.</li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="call-btn">
        <div className="container text-center">
          <a href="tel:+919790006791"><button>Call +91 97900 06791</button></a>
        </div>
      </section>

      <section id="WWO">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <h5>What We Offer</h5>
<p><strong>Expert Technicians:</strong> Our team includes experienced and skilled technicians with in-depth knowledge of all types of water heaters, including Electric, Gas, and Instant models.</p>
<p><strong>Comprehensive Services:</strong> From routine maintenance to complex water heater repairs, we handle every aspect of servicing with care and precision.</p>
<p><strong>Customer-Centric Approach:</strong> We focus on your needs and provide personalized service solutions to ensure a smooth and satisfying experience.</p>
<p><strong>Quality Assurance:</strong> We use genuine spare parts and follow high-quality service standards to help maintain your water heater’s performance and safety.</p>
<p><strong>Affordable Pricing:</strong> Our water heater services are reasonably priced, offering reliable support without exceeding your budget.</p>

            </div>
          </div>
        </div>
      </section>

      <section id="call-btn">
        <div className="container text-center">
          <a href="tel:+919790006791"><button>Call +91 97900 06791</button></a>
        </div>
      </section>

     
      <Footers />
    </>
  );
}
