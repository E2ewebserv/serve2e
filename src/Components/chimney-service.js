import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/chimney.css';
import CHIMNEYHEROS from '../images/CHIMNEYHEROS.jpg'
import CHIMNEYS from '../images/CHIMNEYS.jpg'
import PHONECALLPNG from '../images/PHONECALLPNG.png'
import EMAILPNG from '../images/EMAILPNG.png'
import PURITECH from '../images/PURITECH.jpg'
import WHATSAPPPNG from '../images/WHATSAPPPNG.png'
import { Helmet } from 'react-helmet';
// import CHIMNEYSERVICE from './chimney-service'


export default function CHIMNEYSERVICE() {


useEffect(() => {
       window.scrollTo(0, 0); // Scroll to the top of the page
            document.title = "Chimney Service";
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
                                       <h2>NO 1 BEST CHIMNEY SERVICE CENTER IN TAMILNADU</h2>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                           
                                 <section id="hero" style={{ backgroundImage: `url(${CHIMNEYHEROS})` }}>
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
                       
                               <h2>Issues In Chimney</h2>
                               <ul>
                                 <li> <i class='fas fa-arrow-circle-right'></i>On-Off Problem</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Noise in The Chimney</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i> Chimney light Problem</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Chimney oil Leak Problem</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Chimney fan Not Running</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Chimney Installation</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Chimney Uninstall</li>
                                 
                               </ul>
                       
                               <h2>Types Of Chimney Service</h2>
                               <ul>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Alloy Material Chimney Service</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Copper Material Chimney Service</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Automatic Chimney Service</li>
                                 <li> <i class='fas fa-arrow-circle-right'></i>Retro Model Chimney Service </li>
                                
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
                           <img src={CHIMNEYS} alt="chimney service" title="chimney service"/>
                           </center>
                            <p>We are The 24*7 Best Chimney Service Center. We Service All Types Of Kitchen Chimneys at Your Doorstep in Tamil Nadu. Book Your Complaints, Our Service Technicians Attend Within 2 Hours. We Provide One Month Service Warranty and 3 To 6 Months Spare Parts Warranty. Trusted and Certified Well-Skilled Technicians. Quality Service at Affordable Prices.</p>
                       
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
                             <h5>Chimney Service Center</h5>
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
                             <p>Good  chimney service. i like this quick service response. good customer relationship management.</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Kumar, Madurai</h5>
                             </div>
                             
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>Quick Good service response. quality  fridge service with affordable price. thank u</p>
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
                             <p>Done chimney service in my home perfectly….
                             I love that technician’s response so much….</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Murugan, Thanjavur</h5>
                             </div>
                             
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>This service center is very responsible. I’ve called them for my  chimney service and they’d service work very quick and professionally</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Selvi, Coimbatore</h5>
                             </div>
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>We Do our Fridge Service from this center. Service is Quick and worth for Cost</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Abdul Rahuman, Theni</h5>
                             </div>
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>chimney service is good and very professional and they have proper billing details and cost efficient</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Ranjith Kumar, Pondicherri</h5>
                             
                             </div>
                       
                       
                       
                       
                       
                       
                       
                       
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>Service made for  good service made, very responsive , low cost, one of the best service center.
                             Service’s are core to professional , good communication skills.</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Sathis Raja, Salem</h5>
                             </div>
                             
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>Customer service for good , customer service for  chimney is good. Experienced technician</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Kavi Kumar, Cuddalore</h5>
                             </div>
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>They have serviced our fridge Machine, service is professional and quick and worth for cost</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>Sky Ans, Ramnathapuram</h5>
                             </div>
                             <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                             <p>I’m sure about this center has the chimney service at very low cost</p>
                             <center>
                             <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                             </center>
                             <h5>S.Deepak, Erode</h5>
                             
                             </div>
                       
                       
                       <p>With over 11 years of dedicated experience in the industry, Our Service Center is your trusted partner for all Chimney service needs. Since our inception, we have committed ourselves to delivering top-notch, reliable, and efficient services, ensuring that your appliances operate at their best.</p>
                       
                       </div>
                       </div>
                       </section>
                       
                       
                       
                       
                       
                       
                       <section id="ours">
                         <div className='container'>
                           <div className='row'>
                             <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                       
                             <h5>Our Mission</h5>
                             <p>In Service Center, our mission is to provide unparalleled service excellence through our expertise and commitment to customer satisfaction. We understand the importance of a well-functioning chimney in your daily life and strive to minimize downtime with our swift and professional service.</p>
                       
                             </div>
                       </div>
                       </div>
                       </section>
                       
                       
                       
                       <section id="DESCWASH">
                         <div className='container'>
                           <div className='row'>
                             <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                       
                             <img src={CHIMNEYS} className="img-fluid" alt="chimney service" title='chimney service'/>
                       
                             </div>
                             <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                       
                            <h3>
                            Chimney Customer Support Service</h3>
                            <ul>
                             <li><strong>Technical Assistance: </strong>  Provide technical support to help customers troubleshoot and resolve common issues with their chimneys. This could include guidance on adjusting dampers, identifying and addressing smoke draft problems, or diagnosing structural issues.</li>
                       
                             <li><strong>Installation Support:</strong>Offer assistance with the installation of new chimney systems. Provide guidance on proper installation procedures, recommended placement of chimney flues, and ensuring proper connections to fireplaces, stoves, or heating systems.
   
            
            
                
                
                    
                    </li>
                       
                             <li><strong>Maintenance Advice: </strong>  Educate customers on the importance of regular maintenance for their chimneys. Offer tips and recommendations for cleaning soot and creosote buildup, inspecting chimney liners, checking for blockages, and scheduling professional chimney sweeps to ensure optimal performance and safety.
                       
                       </li>
                       
                       <li><strong>Warranty Support: </strong>Assist customers with any warranty-related issues or claims for their chimneys. Help them understand the terms and coverage of their warranty, facilitate the process of filing claims, and coordinate repairs or replacements as needed.
            
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
                                       <p><strong>Expert Technicians:</strong> Our team comprises highly skilled and certified technicians who possess extensive knowledge and experience in servicing all major chimney brands and models.</p>
                                       <p><strong>Comprehensive Services:</strong> From routine maintenance to complex repairs, we handle all aspects of chimney servicing with precision and care.</p>
                                       <p><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We offer personalized solutions tailored to meet your specific needs and ensure a hassle-free service experience.</p>
                                       <p><strong>Quality Assurance:</strong> We use only genuine spare parts and adhere to the highest standards of service quality, guaranteeing the longevity and performance of your chimney machine.</p>
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
