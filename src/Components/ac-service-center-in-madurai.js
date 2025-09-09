import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/ac.css';
import ACHERO from '../images/ACHERO.jpg';
import ACMAN1 from '../images/ACMAN1.jpeg';
import { Helmet } from "react-helmet";
import PHONECALLPNG from '../images/PHONECALLPNG.png';
import EMAILPNG from '../images/EMAILPNG.png';
import ACPNG from '../images/ACPNG.png';
import WHATSAPPPNG from '../images/WHATSAPPPNG.png';


export default function ACSERVICECENTERINMADURAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Best AC Service Center In Madurai | E2E Web Service |9025312399";
  }, []);

  // Use hash-based URL
  const pageUrl = "https://servicee2e.in/#/ac-service-center-in-madurai";
  

  // Aggregate Rating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Home Appliance Service Madurai - AC Service",
    "url": pageUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1500"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AC Repair and Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "E2E Web Service",
      "image": "https://servicee2e.in/logo.png",
      "telephone": "9025312399",
      "email": "e2ewebservice@gmail.com",
      "url": "https://servicee2e.in", // base URL with hash
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madurai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "625016",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Madurai"
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "name": "Madurai"
      },
      "availableLanguage": ["English", "Tamil"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Best AC Service Center In Madurai | E2E Web Service | 9025312399</title>
        <meta
          name="description"
          content="Best AC Service Center in Madurai. Call +91 90253 12399 for expert repair services. Quick service within 2 hours."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best AC Service Center In Madurai | E2E Web Service" />
        <meta property="og:description" content="Expert AC repair services near you. Reliable technicians for all AC brands. Doorstep service, quick response." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Home Appliance Service" />
        <meta property="og:image" content="https://servicee2e.in/static/media/ACPNG.70f67615e86bff74ba37.png" />
        <meta property="og:image:secure_url" content="https://servicee2e.in/static/media/ACMAN1.bc9bec8b8d58d92afa4a.jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Navbar />

      <section id="headline">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>NO 1 BEST AC SERVICE CENTER IN MADURAI</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="hero" style={{ backgroundImage: `url(${ACHERO})` }}>
        <div className="hero-content">
          <h1>WE ARE READY TO HELP</h1>
          <h3>24*7 Service Support</h3>
          <a href="tel:+919025312399" className="hero-btn">+91 90253 12399</a>
        </div>
      </section>

      <section id="cchl">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>CUSTOMER CARE HELPLINE</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="start">
        <div className="container text-center">
          <div className="line-container">
            <div className="line left-line"></div>
            <div className="star">&#9733;</div>
            <div className="line right-line"></div>
          </div>
        </div>
      </section>



      <section id="CEE">
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-4 col-12'>
              <h3>Call Us</h3>
              <img src={PHONECALLPNG} alt="Call Us" />
              <a href="tel:+919025312399">+91 90253 12399</a>
            </div>
            <div className='col-md-4 col-12'>
              <h3>Email Us</h3>
              <img src={EMAILPNG} alt="Email Us" />
              <a href="mailto:e2ewebservice@gmail.com">e2ewebservice@gmail.com</a>
            </div>
            <div className='col-md-4 col-12'>
              <h3>Enquiry Us</h3>
              <img src={WHATSAPPPNG} alt="WhatsApp" />
              <a href="https://wa.me/919025312399" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>



      <section id="WRHY">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>We Are Ready To Help You</h2>
            </div>
          </div>
        </div>
      </section>



      <section id="LIST">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Customer Care Helpline Support</h2>
              <ul>
                <li><i className='fas fa-arrow-circle-right'></i> Book Your Complaints 24*7 Customer Care</li>
                <li><i className='fas fa-arrow-circle-right'></i> Quick Service Within 2 Hours</li>
                <li><i className='fas fa-arrow-circle-right'></i> Well Skilled Trained Technicians</li>
                <li><i className='fas fa-arrow-circle-right'></i> Quality Service Affordable Price</li>
                <li><i className='fas fa-arrow-circle-right'></i> Door Step Service Center</li>
                <li><i className='fas fa-arrow-circle-right'></i> Trusted Certified Technicians</li>
              </ul>

              <h2>Issues In AC</h2>
              <ul>
                <li><i className='fas fa-arrow-circle-right'></i> AC On-Off Problem</li>
                <li><i className='fas fa-arrow-circle-right'></i> Noise in The AC</li>
                <li><i className='fas fa-arrow-circle-right'></i> AC No Cooling Problem</li>
                <li><i className='fas fa-arrow-circle-right'></i> AC Water Leak Problem</li>
                <li><i className='fas fa-arrow-circle-right'></i> AC Outdoor Unit Not Running</li>
                <li><i className='fas fa-arrow-circle-right'></i> AC Installation</li>
                <li><i className='fas fa-arrow-circle-right'></i> AC Uninstall</li>
              </ul>


              <h2>Types Of AC</h2>
              <ul>
                <li><i className='fas fa-arrow-circle-right'></i> Split AC Service</li>
                <li><i className='fas fa-arrow-circle-right'></i> Window AC Service</li>
                <li><i className='fas fa-arrow-circle-right'></i> Portable AC Service</li>
                <li><i className='fas fa-arrow-circle-right'></i> Wall AC Service</li>
                <li><i className='fas fa-arrow-circle-right'></i> Ceiling AC Service</li>
                <li><i className='fas fa-arrow-circle-right'></i> AC Service For Installation</li>
                <li><i className='fas fa-arrow-circle-right'></i> AC Service For Uninstall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="WRHY">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Why Choose Us?</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="WASHMANSIT">
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <img src={ACPNG} alt="AC service center in Madurai" title="AC Service Madurai" className="img-fluid" />
              <p>
                We are The 24*7 Best AC Service Center. We Service All Types Of Split, Window, and Portable AC at Your Doorstep in Tamil Nadu.
                Book Your Complaints, Our Service Technicians Attend Within 2 Hours.
                We Provide One Month Service Warranty and 3 To 6 Months Spare Parts Warranty.
                Trusted and Certified Well-Skilled Technicians. Quality Service at Affordable Prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="STARS">
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-12 text-center'>
              <div className="star" id="STARRATE">&#9733;</div>
              <h5>24*7 Customer Support</h5>
            </div>
            <div className='col-md-4 col-12 text-center'>
              <div className="star" id="STARRATE">&#9733;</div>
              <h5>AC Service Center</h5>
            </div>
            <div className='col-md-4 col-12 text-center'>
              <div className="star" id="STARRATE">&#9733;</div>
              <h5>Service Within 2 Hours</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="WRHY">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Customer Testimonials</h2>
            </div>
          </div>
        </div>
      </section>

    <section id="RATING">
    <div className='container'>
    <div className='row'>
    <div className='col-md-4 col-sm-12 mb-4' id="borders">
    <p>Good washing machine service. I like this quick service response. Good customer relationship management.</p>
    <center>
    <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                </center>
                <h5>Kumar, Madurai</h5>
                </div>

                <div className='col-md-4 col-sm-12 mb-4' id="borders">
                <p>Excellent AC service. The technician arrived promptly and resolved the issue quickly. Very professional and courteous.</p>
                <center>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                </center>
                <h5>Lakshmi, Madurai</h5>
                </div>

                <div className='col-md-4 col-sm-12 mb-4' id="borders">
                <p>Quick and reliable service. My AC was serviced within 2 hours and works perfectly now. Highly recommend!</p>
                <center>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                </center>
                <h5>Arun, Madurai</h5>
                </div>

                <div className='col-md-4 col-sm-12 mb-4' id="borders">
                <p>The AC service was top-notch. The technician explained the issue clearly and fixed it on the spot. Very satisfied!</p>
                <center>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                </center>
                <h5>Priya, Madurai</h5>
                </div>

                <div className='col-12 mt-3'>
                <p>
                With over 11 years of dedicated experience in the industry, Our Service Center is your trusted partner for all Air Conditioner service needs.
                Since our inception, we have committed ourselves to delivering top-notch, reliable, and efficient services, ensuring that your appliances operate at their best.
                </p>
                </div>
                </div>
                </div>
                </section>

                <section id="ours">
                <div className='container'>
                <div className='row'>
                <div className='col-12'>
                <h5>Our Mission</h5>
                <p>
                In Service Center, our mission is to provide unparalleled service excellence through our expertise and commitment to customer satisfaction.
                We understand the importance of a well-functioning AC in your daily life and strive to minimize downtime with our swift and professional service.
               </p>
               </div>
               </div>
               </div>
               </section>

               <section id="DESCWASH">
               <div className='container'>
               <div className='row'>
               <div className='col-md-6 col-12'>
               <img src={ACMAN1} className="img-fluid" alt="AC service Madurai" title="AC service in Madurai" />
               </div>
               <div className='col-md-6 col-12'>
               <h3>AC Customer Support Service</h3>
               <ul>
               <li><strong>Technical Assistance:</strong> Provide technical support to help customers troubleshoot and resolve common AC issues (error codes, settings, etc.).</li>
               <li><strong>Installation Support:</strong> Offer guidance on proper AC installation, placement, and connecting to existing HVAC systems.</li>
               <li><strong>Maintenance Advice:</strong> Educate customers on regular maintenance: cleaning filters, checking refrigerant levels, scheduling professional tune-ups.</li>
               <li><strong>Warranty Support:</strong> Assist customers with warranty claims: explain coverage, facilitate filing claims, coordinate repairs or replacements.</li>
              </ul>
              </div>
              </div>
              </div>
              </section>

      <section id="call-btn">
      <div className='container text-center'>
      <a href='tel:+919025312399'><button>Call +91 90253 12399</button></a>
      </div>
      </section>


      <section id="WWO">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h5>What We Offer</h5>
              <p><strong>Expert Technicians:</strong> Our team comprises highly skilled and certified technicians with extensive knowledge in servicing all AC brands and models.</p>
              <p><strong>Comprehensive Services:</strong> From routine maintenance to complex repairs, we handle all aspects of AC servicing with precision.</p>
              <p><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We offer personalized solutions and a hassle-free experience.</p>
              <p><strong>Quality Assurance:</strong> We use only genuine spare parts and adhere to high service quality standards.</p>
              <p><strong>Affordable Pricing:</strong> Competitive pricing offering the best value without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="call-btn">
        <div className='container text-center'>
          <a href='tel:+919025312399'><button>Call +91 90253 12399</button></a>
        </div>
      </section>

      <section id='BDC'>
        <nav aria-label="breadcrumb" className="breadcrumb-container">
          <ol className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ac-service">AC Service</Link></li>
            <li className="active" aria-current="page">AC Service Center In Madurai</li>
          </ol>
        </nav>
      </section>

      <section id='SDS'>
        <div className="container">
          <h2 className="sds-title">AC Service Center In Madurai – Complete Details</h2>
          <div className="sds-content">
            <p><strong>Service Name:</strong> AC Repair and Maintenance</p>
            <p><strong>Product:</strong> AC</p>
            <p><strong>Service Type:</strong> Split AC, Window AC, Inverter AC, Portable AC</p>
            <p><strong>Service Area:</strong> Madurai & Surrounding 20 km</p>
            <p><strong>Booking Mode:</strong> Online / Phone Call</p>
            <p><strong>Contact Number:</strong> <a href="tel:+919025312399">+91 90253 12399</a></p>
            <p><strong>Email:</strong> <a href="mailto:e2ewebservice@gmail.com">e2ewebservice@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="https://servicee2e.in">https://servicee2e.in</a></p>
            <p><strong>Working Hours:</strong> 9 AM – 9 PM (All Days)</p>
            <p><strong>Home Visit:</strong> Yes, Doorstep Service Available</p>
          </div>
        </div>
      </section>

      <section id='faqs'>
        <div className="container">
          <h2 className="faq-title">AC Service Center In Madurai – FAQs</h2>
          <table className="faq-table">
            <tbody>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
              <tr>
                <td>Do you provide AC service at home?</td>
                <td>Yes, we offer doorstep AC service in your area.</td>
              </tr>
              <tr>
                <td>What types of AC do you service?</td>
                <td>We service Split ACs, Window ACs, Inverter ACs, and Portable ACs.</td>
              </tr>
              <tr>
                <td>How to book an AC service?</td>
                <td>You can book through our website or call our support team directly.</td>
              </tr>
              <tr>
                <td>Is there any warranty for the service?</td>
                <td>Yes, we provide a service warranty based on the repair type.</td>
              </tr>
              <tr>
                <td>Do you use original AC spare parts?</td>
                <td>Yes, we use only genuine AC parts for all repairs.</td>
              </tr>
              <tr>
                <td>How much time will it take to repair my AC?</td>
                <td>Usually within 1–2 hours, depending on the issue.</td>
              </tr>
              <tr>
                <td>Can I get service on weekends?</td>
                <td>Yes, we are available 7 days a week for AC service.</td>
              </tr>
              <tr>
                <td>What are the service charges?</td>
                <td>Charges depend on the issue. Basic inspection is free.</td>
              </tr>
              <tr>
                <td>Do you offer annual maintenance plans?</td>
                <td>Yes, we offer AMC for regular AC servicing.</td>
              </tr>
              <tr>
                <td>Is AC installation service available?</td>
                <td>Yes, we provide installation and demo services for AC.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id='UST'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>Useful Things For AC Service</h4>
              <ul className="ac-tips">
                <li>Clean or replace the air filters every 15–30 days for optimal airflow.</li>
                <li>Ensure the outdoor unit is free from debris and obstructions.</li>
                <li>Use a voltage stabilizer to protect the AC from power fluctuations.</li>
                <li>Set the thermostat at an optimal temperature (24–26°C) for better energy efficiency.</li>
                <li>Schedule professional servicing at least twice a year.</li>
                <li>Check for any unusual noise or leaks in the indoor or outdoor unit.</li>
                <li>Keep the indoor unit's surroundings clean and well-ventilated.</li>
                <li>Don’t use the AC with doors or windows open – it reduces efficiency.</li>
                <li>Use the "Sleep Mode" at night to save energy and maintain comfort.</li>
                <li>Clean the condenser and evaporator coils regularly.</li>
                <li>Check the refrigerant level during annual maintenance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="interl">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Link to='/'><h6>Home</h6></Link>
              <ul>
                <li><Link to='/washing-machine-service'>Washing Machine Service</Link></li>
                <li><Link to='/fridge-service'>Fridge Service</Link></li>
                <li><Link to='/ac-service'>AC Service</Link></li>
                <li><Link to='/tv-service'>TV Service</Link></li>
                <li><Link to='/microwave-oven-service'>Microwave Oven Service</Link></li>
                <li><Link to='/water-heater-service'>Water Heater Service</Link></li>
                <li><Link to='/water-purifier-service'>Water Purifier Service</Link></li>
                <li><Link to='/chimney-service'>Chimney Service</Link></li>
                <li><Link to='/hvac-service'>HVAC Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="FW">
        <div className="icon-container">
          <div className="icon facebook">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="icon whatsapp">
            <a
              href="https://wa.me/919025312399"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </section>

      <section id="TABOFCONTENT">
        <div className="container">
          <h2>Table of Contents</h2>
          <ul id="TAB">
            <li><a href="#headline">1. AC Service Customer Care</a></li>
            <li><a href="#hero">2. Hero Section</a></li>
            <li><a href="#cchl">3. Customer Care Helpline</a></li>
            <li><a href="#CEE">4. Contact Us</a></li>
            <li><a href="#WRHY">5. We Are Ready to Help You</a></li>
            <li><a href="#LIST">6. Customer Care Helpline Support</a></li>
            <li><a href="#WASHMANSIT">7. Intro Section</a></li>
            <li><a href="#STARS">8. Customer Support Ratings</a></li>
            <li><a href="#RATING">9. Customer Testimonials</a></li>
            <li><a href="#ours">10. Our Mission</a></li>
            <li><a href="#DESCWASH">11. AC Customer Support Service</a></li>
            <li><a href="#WWO">12. What We Offer</a></li>
            <li><a href="#interl">13. Related Services</a></li>
            <li><a href="#FW">14. Follow Us</a></li>
          </ul>
        </div>
      </section>

      <Footers/>
    </>
  );
}
