import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
// import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/tv.css';
import TVHERO from '../images/TVHERO.jpg'
import TVDESC from '../images/TVDESC.webp'

// import PHONECALLPNG from '../images/PHONECALLPNG.png'
// import EMAILPNG from '../images/EMAILPNG.png'
import TVTECH from '../images/TVTECH.jpg'
// import WHATSAPPPNG from '../images/WHATSAPPPNG.png'
// import { Helmet } from 'react-helmet';

 import AOS from 'aos';
import 'aos/dist/aos.css';


export default function TVSERVICE() {

useEffect(() => {
       window.scrollTo(0, 0);  
       document.title = "TV Service";
     }, []);


        useEffect(() => {
                AOS.init({ duration: 1000, once: true });
              }, []);
          

  return (
      <>

 
                   


               <div>
                       <Navbar />
                     </div>
            
               
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
                     <section id="hero" style={{ backgroundImage: `url(${TVHERO})` }}>
                         <div className="hero-content">
                           <h1>WE ARE READY TO HELP</h1>
                           <h3>Fast And Reliable Service</h3>
                           
                           <a href="tel:+919025312399" className="hero-btn">+919025312399</a>
                         </div>
                       </section>
               
               
           
           
                 <section id="start" data-aos="zoom-in">
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
           
           
           
           
           
           
           <section id="WRHY" data-aos="fade-left">
             <div className='container'>
               <div className='row'>
                 <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
           
                 <h2>We Are Ready To Help You</h2>
           
                 </div>
           </div>
           </div>
           </section>
           
           
           <section id="LIST" data-aos="fade-right">
             <div className='container'>
               <div className='row'>
                 <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
           
                   <h2 data-aos="fade-left">Customer Care Helpline Support</h2>
                   <ul>
                  <li> <i class='fas fa-arrow-circle-right'></i>Book Your Complaints For Quality Service</li>
          <li> <i class='fas fa-arrow-circle-right'></i>We Aim to Complete Service on the Same Day</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Well Skill Trained Technicians</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Quality Service Affordable Price</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Door Step Service Center</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Trusted Professional Technicians</li>
                   </ul>
           
                   <h2 data-aos="zoom-out">Issues In TV</h2>
                   <ul>
                     <li> <i class='fas fa-arrow-circle-right'></i>LED TV On-Off Service</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>Noise in The LED TV</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>Sound Problem in LED TV</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>Horizontal Line in LED TV</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>Display Problem in LED TV</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>Video Problem in LED TV</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>LED TV Installation</li>
                   </ul>
           
                   <h2 data-aos="zoom-in">Types Of TV</h2>
                   <ul>
                     <li> <i class='fas fa-arrow-circle-right'></i>LED TV Service</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>LCD TV Service</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>ANDROID TV Service</li>
                     <li> <i class='fas fa-arrow-circle-right'></i>SMART TV Service</li>
                    
                   </ul>
                 </div>
               </div>
             </div>
           </section>
           
           
           <section id="WRHY" data-aos="fade-left">
             <div className='container'>
               <div className='row'>
                 <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
           
                 <h2 data-aos="fade-right ">Why Choose Us?</h2>
           
                 </div>
           </div>
           </div>
           </section>
           <section id="WASHMANSIT" data-aos="fade-left">
             <div className='container'>
               <div className='row'>
                 <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                   <center>
               <img src={TVTECH} alt="washing machine service" title="washing machine service"/>
               </center>
               <p>We are a Fast and Reliable TV Service Center. We handle all types of LED, LCD, Smart TVs, and Android TVs with doorstep service across Tamil Nadu. Book your complaint for same-day service. We focus on quality service and use genuine spare parts to help maintain picture quality, sound performance, and customer satisfaction.</p>

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
           <section id="STARS" data-aos="zoom-in">
             <div className='container'>
               <div className='row'>
                
                
                 <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                   <center id="border">
                 <div className="star" id="STARRATE">&#9733;</div>
                 <h5>Fast And Reliable Service</h5>
                 </center>
                 </div>
                 <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                   <center id="border">
                 <div className="star" id="STARRATE">&#9733;</div>
                 <h5>TV Service Center</h5>
                 </center>
                 </div>
                 <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                   <center id="border">
                 <div className="star" id="STARRATE">&#9733;</div>
                 <h5>Get Your Service Done the Same Day</h5>
                 </center>
                 </div>
                 
           </div>
           </div>
           </section>
           
           
           
           
           
           
           
           
           
           
           
{/*            
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
                 <p>Good  washing machine service. i like this quick service response. good customer relationship management.</p>
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
                 <p>Done washing machine service in my home perfectly….
                 I love that technician’s response so much….</p>
                 <center>
                 <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                 </center>
                 <h5>Murugan, Thanjavur</h5>
                 </div>
                 
                 <div className='col-lg-3 col-md-3 col-sm-12 col-12' id="borders">
                 <p>This service center is very responsible. I’ve called them for my  Washing Machine service and they’d service work very quick and professionally</p>
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
                 <p>Washing Machine service is good and very professional and they have proper billing details and cost efficient</p>
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
                 <p>Customer service for good , customer service for  washing machine is good. Experienced technician</p>
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
                 <p>I’m sure about this center has the washing machine service at very low cost</p>
                 <center>
                 <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
                 </center>
                 <h5>S.Deepak, Erode</h5>
                 
                 </div>
           
           
           <p>With over 11 years of dedicated experience in the industry, Our Service Center is your trusted partner for all Tv service needs. Since our inception, we have committed ourselves to delivering top-notch, reliable, and efficient services, ensuring that your appliances operate at their best.</p>
           
           </div>
           </div>
           </section>
           
            */}
           
           
           
           
           <section id="ours" data-aos="fade-left">
             <div className='container'>
               <div className='row'>
                 <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
           
                 <h5>Our Mission</h5>
                <p>
  Our mission is to provide exceptional service through our expertise and focus on customer satisfaction. We reduce inconvenience with prompt, professional TV repair and support.
</p>
           
                 </div>
           </div>
           </div>
           </section>
           
           
           
           <section id="DESCWASH" data-aos="fade-right">
             <div className='container'>
               <div className='row'>
                 <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
           
                 <img src={TVDESC} className="img-fluid" alt="washing machine service" title='washing machine service'/>
           
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
           
                <h3>TV Customer Support Service</h3>
                <ul>
                <li><strong>Technical Assistance:</strong> Troubleshoot common TV issues: no display, sound problems, software glitches, and connectivity errors.</li>
<li><strong>Installation Support:</strong> Guidance on proper TV installation, wall mounting, and connecting external devices.</li>
<li><strong>Maintenance Advice:</strong> Tips on cleaning screens, managing cables, and updating software for better performance.</li>


                </ul>
                 </div>
           </div>
           </div>
           </section>
           
{/*            
           <section id="call-btn">
                     <div className='container'>
                       <div className='row'>
                         <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                           <center>
                           <a href='tel:+919025312399'><button>+919025312399</button></a>
                           </center>
                         </div>
                       </div>
                     </div>
                   </section>
           
            */}
           
           
                   <section id="WWO" data-aos="zoom-in">
                     <div className='container'>
                       <div className='row'>
                         <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                           <h5>What We Offer</h5>
                         <p><strong>Expert Technicians:</strong> Our team includes experienced and skilled technicians with in-depth knowledge of all types of televisions, including LED, LCD, Smart TVs, and Android TVs.</p>
<p><strong>Comprehensive Services:</strong> From routine check-ups to complex TV repairs, we handle every aspect of television servicing with attention to detail and care.</p>
<p><strong>Customer-Centric Approach:</strong> We understand your needs and provide personalized service solutions to ensure a smooth and stress-free experience.</p>
<p><strong>Quality Assurance:</strong> We use genuine spare parts and follow high-quality service practices to help maintain your TV’s performance and viewing clarity.</p>
<p><strong>Affordable Pricing:</strong> Our TV services are competitively priced, offering reliable support without straining your budget.</p>

                         </div>
                       </div>
                     </div>
                   </section>
           
                   {/* <section id="call-btn" data-aos="fade-left">
                     <div className='container'>
                       <div className='row'>
                         <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                           <center>
                           <a href='tel:+9190253123991'><button>+919025312399</button></a>
                           </center>
                         </div>
                       </div>
                     </div>
                   </section> */}
           
           
    
           
           
           <div><Footers/></div>
           
                    </>
  )
}
