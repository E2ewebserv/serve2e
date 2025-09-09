import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/hvac.css';
import HVACHERO from '../images/HVACHERO.png'
import HVACDESC from '../images/HVACDESC.jpg'
import HVACTECH from '../images/HVACTECH.jpg'

import PHONECALLPNG from '../images/PHONECALLPNG.png'
import EMAILPNG from '../images/EMAILPNG.png'

import WHATSAPPPNG from '../images/WHATSAPPPNG.png'
import { Helmet } from 'react-helmet'; 




export default function HVACSERVICE() {


  useEffect(() => {
         window.scrollTo(0, 0); // Scroll to the top of the page
             document.title = " HVAC Service";

       }, []);

  
  return (
  <>
   
                        <div>
                                <Navbar />
                              </div>
                        
                        <section id="headline">
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <h2>NO 1 BEST HEATING, VENTILATION & Air CONDITIONING SERVICE CENTER IN TAMILNADU</h2>
                                  </div>
                                </div>
                              </div>
                            </section>
                        
                              <section id="hero" style={{ backgroundImage: `url(${HVACHERO})` }}>
                                  <div className="hero-content">
                                    <h1>WE ARE READY TO HELP</h1>
                                    <h3>24*7 Service Support</h3>
                                    
                                    <a href="tel:+919629398411" className="hero-btn">+919629398411</a>
                                  </div>
                                </section>
                        
                    
                    
                    
                          <section id="start">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 text-center">
                            <div className="line-container">
                              <div className="line left-line"></div>
                              <div className="star">&#9733;</div> {/* Star symbol */}
                              <div className="line right-line"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    
                    
                    
                    
                    
                    
                    <section id="WRHY">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    
                          <h2>We Are Ready To Help You</h2>
                    
                          </div>
                    </div>
                    </div>
                    </section>
                    
                    
                    <section id="LIST">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    
                            <h2>Customer Care Helpline Support</h2>
                            <ul>
                           <li> <i class='fas fa-arrow-circle-right'></i>Book Your Complaints 24*7 Customer Care</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Quick Service Within 2 Hours</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Well Skill Trained Technicians</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Quality Service Affordable Price</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Door Step Service Center</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Trusted Certified Technicians</li>
                            </ul>
                    
                            <h2>Issues In HVAC</h2>
                            <ul>
                            <li> <i class='fas fa-arrow-circle-right'></i>Insufficient Heating or Cooling</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Uneven Temperature Distribution</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Strange Noises</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Frequent Cycling  </li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Increased Energy Bills</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Poor Airflow</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Water Leaks</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Foul Odors</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>System Not Turning On</li>
                              
                            </ul>
                    
                            <h2>Types Of HVAC Service</h2>
                            <ul>
                              <li> <i class='fas fa-arrow-circle-right'></i>Installation</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Maintenance</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Repair </li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Duct Cleaning</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Thermostat Services</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Air Quality Solutions</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Energy Efficiency Audits</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>System Upgrades</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Ventilation Services</li>
                              <li> <i class='fas fa-arrow-circle-right'></i>Emergency Services</li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                    
                    
                    <section id="WRHY">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    
                          <h2>Why Choose Us?</h2>
                    
                          </div>
                    </div>
                    </div>
                    </section>
                    <section id="WASHMANSIT">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                            <center>
                        <img src={HVACTECH} alt="washing machine service" title="washing machine service"/>
                        </center>
                         <p>We are The 24*7 Best HVAC Service Center, dedicated to providing top-notch HVAC services for all types of heating, ventilation, and air conditioning systems. Serving the entire region of Tamil Nadu, we ensure your HVAC systems run smoothly and efficiently.</p>
                    
                          </div>
                    </div>
                    </div>
                    </section>
                    
                    
                    
                    {/* <section id="WRHY">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    
                          <h2>Why Choose Us?</h2>
                    
                          </div>
                    </div>
                    </div>
                    </section> */}
                    <section id="STARS">
                      <div className='container'>
                        <div className='row'>
                         
                         
                          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <center id="border">
                          <div className="star" id="STARRATE">&#9733;</div>
                          <h5>24*7 Customer Support</h5>
                          </center>
                          </div>
                          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <center id="border">
                          <div className="star" id="STARRATE">&#9733;</div>
                          <h5>HVAC Service Center</h5>
                          </center>
                          </div>
                          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <center id="border">
                          <div className="star" id="STARRATE">&#9733;</div>
                          <h5>Service Within 2 Hours</h5>
                          </center>
                          </div>
                          
                    </div>
                    </div>
                    </section>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <section id="WRHY">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    
                          <h2>Customer Testimonials</h2>
                    
                          </div>
                    </div>
                    </div>
                    </section>
                    
                    
                    <section id="RATING">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>Good HVAC Service. I like this quick service response. Good customer relationship management.
We take pride in providing the best HVAC service in Tamil Nadu, ensuring that our customers are always satisfied with our quick and efficient service.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Kumar, Madurai</h5>
                          </div>
                          
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>Quick Good service response. quality hvac service with affordable price. thank u Quick, good service response. Quality HVAC service at an affordable price. Thank you.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Siva Rangini, Chennai</h5>
                          </div>
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>Brilliant Service. My Work is done Quick and At Least Cost Possible. Personally, I Loved the Service. Keep It Up ❤️</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>R.Muthu Raghavan, Tirchy</h5>
                          </div>
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>The service is Good and also at affordable charge. The AC which I serviced few days back, working at great condition. Also They finished the service quick. Thankyou</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Manoj Kumar, Tirunelveli</h5>
                          
                          </div>
                    
                    
                    
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>Done washing machine service in my home perfectly….
                          I love that technician’s response so much….</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Murugan, Thanjavur</h5>
                          </div>
                          
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>This service center is very responsible. I called them for my HVAC service, and they completed the work very quickly and professionally.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Selvi, Coimbatore</h5>
                          </div>
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>We get our HVAC service from this center. The service is quick and worth the cost.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Abdul Rahuman, Theni</h5>
                          </div>
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>HVAC service is excellent and very professional. They provide proper billing details and are cost-efficient.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Ranjith Kumar, Pondicherri</h5>
                          
                          </div>
                    
                    
                    
                    
                    
                    
                    
                    
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>Service made for  good service made, very responsive , low cost, one of the best service center.
                          Service’s are core to professional , good communication skills</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Sathis Raja, Salem</h5>
                          </div>
                          
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>Customer service is excellent. The HVAC service is handled by experienced technicians.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Kavi Kumar, madurai</h5>
                          </div>
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>They have serviced our HVAC system. The service is professional, quick, and worth the cost.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>Sky Ans, Ramnathapuram</h5>
                          </div>
                          <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                          <p>I’m sure this center offers HVAC service at a very low cost.</p>
                          <center>
                          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                          </center>
                          <h5>S.Deepak, Erode</h5>
                          
                          </div>
                    
                    
                    <p>With over 11 years of dedicated experience in the industry, Our Service Center is your trusted partner for all Air Conditioner service needs. Since our inception, we have committed ourselves to delivering top-notch, reliable, and efficient services, ensuring that your appliances operate at their best. With over 11 years of dedicated experience in the industry, our Service Center is your trusted partner for all HVAC service needs. Since our inception, we have committed ourselves to delivering top-notch, reliable, and efficient services, ensuring that your systems operate at their best.</p>
                    
                    </div>
                    </div>
                    </section>
                    
                    
                    
                    
                    
                    
                    <section id="ours">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    
                          <h5>Our Mission</h5>
                          <p>In Service Center, our mission is to provide unparalleled service excellence through our expertise and commitment to customer satisfaction. We understand the importance of a well-functioning washing machine in your daily life and strive to minimize downtime with our swift and professional service.</p>
                    
                          </div>
                    </div>
                    </div>
                    </section>
                    
                    
                    
                    <section id="DESCWASH">
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    
                          <img src={HVACDESC} className="img-fluid" alt="washing machine service" title='washing machine service'/>
                    
                          </div>
                          <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    
                         <h3>
                       
HAVC Customer Support Service</h3>
                         <ul>
                          <li><strong>Technical Assistance:  </strong> Provide technical support to help customers troubleshoot and resolve common issues with their HVAC systems. This includes guidance on adjusting settings, troubleshooting error codes, or diagnosing mechanical problems.

</li>
                    
                          <li><strong>Installation Support:</strong>Offer assistance with the installation of new air conditioning systems. Provide guidance on proper installation procedures, recommended placement of units, and connecting to existing HVAC systems.


         
         
             
             
                 
                 </li>
                    
                          <li><strong>Maintenance Advice:  </strong>  Educate customers on the importance of regular maintenance for their HVAC systems. Offer tips and recommendations for cleaning filters, checking refrigerant levels, and scheduling professional tune-ups to ensure optimal performance and longevity of their HVAC systems.
                    
                    </li>
                    
                    <li><strong>Warranty Support:</strong> Assist customers with any warranty-related issues or claims for their HVAC systems. Help them understand the terms and coverage of their warranty, facilitate the process of filing claims, and coordinate repairs or replacements as needed.
         
         </li>
                         </ul>
                          </div>
                    </div>
                    </div>
                    </section>
                    
                    
                    <section id="call-btn">
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                                    <center>
                                    <a href='tel:+919629398411'><button>+919629398411</button></a>
                                    </center>
                                  </div>
                                </div>
                              </div>
                            </section>
                    
                    
                    
                    
                            <section id="WWO">
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                                    <h5>What We Offer</h5>
                                    <p><strong>Expert Technicians:</strong> Our team comprises highly skilled and certified technicians who possess extensive knowledge and experience in servicing all major washing machine brands and models.</p>
                                    <p><strong>Comprehensive Services:</strong> From routine maintenance to complex repairs, we handle all aspects of washing machine servicing with precision and care.</p>
                                    <p><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We offer personalized solutions tailored to meet your specific needs and ensure a hassle-free service experience.</p>
                                    <p><strong>Quality Assurance:</strong> We use only genuine spare parts and adhere to the highest standards of service quality, guaranteeing the longevity and performance of your washing machine.</p>
                                    <p><strong>Affordable Pricing:</strong> Our services are competitively priced, offering you the best value without compromising on quality.</p>
                                  </div>
                                </div>
                              </div>
                            </section>
                    
                            <section id="call-btn">
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                                    <center>
                                    <a href='tel:+9196293984111'><button>+919629398411</button></a>
                                    </center>
                                  </div>
                                </div>
                              </div>
                            </section>
                    
                

             
                    
                    
                    <div><Footers/></div>
                    
                             </>
  )
}
