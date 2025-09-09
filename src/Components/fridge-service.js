import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
// import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/fridge.css';
import FRIDGEHERO from '../images/FRIDGEHERO.png'
import FRIDESC from '../images/FRIDESC.webp'
import FRIDGEMAN from '../images/FRIDGEMAN.webp'
// import PHONECALLPNG from '../images/PHONECALLPNG.png'
// import EMAILPNG from '../images/EMAILPNG.png'
// import WHATSAPPPNG from '../images/WHATSAPPPNG.png'
// import { Helmet } from "react-helmet";

 import AOS from 'aos';
import 'aos/dist/aos.css';



export default function FRIDGESERVICE() {
  
    useEffect(() => {
       window.scrollTo(0, 0); // Scroll to the top of the page
document.title = "Fridge Service";


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

       
             <section id="hero" style={{ backgroundImage: `url(${FRIDGEHERO})` }}>
                 <div className="hero-content">
                   <h1>WE ARE READY TO HELP</h1>
                    <h3>Fast And Reliable Service</h3>
                   
                   <a href="tel:+919790005712" className="hero-btn">+919790005712</a>
                 </div>
               </section>
       
   
   
   
   <section id="start" data-aos="zoom-in">

        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="line-container">
                <div className="line left-line"></div>
                <div className="star twinkle">&#9733;</div>
                <div className="line right-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
   
   
   
   
  <section id="WRHY" data-aos="fade-right">

        <div className="container">
          <h2 className="reveal up">We Are Ready To Help You</h2>
        </div>
      </section>
   
   
   <section id="LIST" data-aos="fade-left">
     <div className='container'>
       <div className='row'>
         <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
   
           <h2>Customer Care Helpline Support</h2>
           <ul>
          <li> <i class='fas fa-arrow-circle-right'></i>Book Your Complaints For Quality Service</li>
          <li> <i class='fas fa-arrow-circle-right'></i>We Aim to Complete Service on the Same Day</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Well Skill Trained Technicians</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Quality Service Affordable Price</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Door Step Service Center</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Trusted Professional Technicians</li>
           </ul>
   
           <h2 data-aos="fade-right">Issues In Refrigerator</h2>
           <ul>
             <li> <i class='fas fa-arrow-circle-right'></i>Refrigerator On-Off Problem</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Noise in The Refrigerator</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Vibration Problem</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Water Leakage Problem</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Water Not Draining Problem</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Water Over Flow Problem</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Door Not Lock Problem</li>
           </ul>
   
           <h2 data-aos="fade-left">Types Of Fridge Service</h2>
           <ul>
             <li> <i class='fas fa-arrow-circle-right'></i>Small Fridge Service</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Single Door Fridge Service</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Double Door Fridge Service</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Compressor For Fridge Service</li>
             <li> <i class='fas fa-arrow-circle-right'></i>Fridge Service For Cooling Issue</li>
           </ul>
         </div>
       </div>
     </div>
   </section>
   
   
   <section id="WRHY"  data-aos="fade-right">
     <div className='container' >
       <div className='row'>
         <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
   
         <h2>Why Choose Us?</h2>
   
         </div>
   </div>
   </div>
   </section>

   <section id="WASHMANSIT" data-aos="fade-left" >
     <div className='container'>
       <div className='row'>
         <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
           <center>
       <img src={FRIDGEMAN} alt="Fridge Service  " title="Fridge Service"/>
       </center>
       <p>We are a Fast and Reliable Fridge Service Center. We handle all types of Single Door, Double Door, and Side-by-Side Refrigerators with doorstep service across Tamil Nadu. Book your complaint for same-day service. We focus on quality service and use genuine spare parts to help maintain lasting performance and customer satisfaction.</p>

   
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
   <section id="STARS" data-aos="fade-right">
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
         <h5>Fridge Service Center</h5>
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
   
   
   <p>With over 11 years of dedicated experience in the industry, Our Service Center is your trusted partner for all Refrigerator service needs. Since our inception, we have committed ourselves to delivering top-notch, reliable, and efficient services, ensuring that your appliances operate at their best.</p>
   
   </div>
   </div>
   </section>
    */}
   
   
   
   
   
   <section id="ours" data-aos="fade-right">
     <div className='container'>
       <div className='row'>
         <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
   
         <h5 data-aos="fade-right">Our Service</h5>
         <p data-aos="fade-left">In Service Center, our mission is to provide unparalleled service excellence through our expertise and commitment to customer satisfaction. We understand the importance of a well-functioning Fridge in your daily life and strive to minimize downtime with our swift and professional service.</p>
   
         </div>
   </div>
   </div>
   </section>
   
   
   
   <section id="DESCWASH" data-aos="fade-right">
     <div className='container'>
       <div className='row'>
         <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
   
         <img src={FRIDESC} className="img-fluid" alt="washing machine service" data-aos="fade-right" title='washing machine service'/>
   
         </div>
         <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
   
        <h3>Refrigerator Customer Support Service</h3>
        <ul>
       <li><strong>Technical Support:</strong> Have a team of skilled technicians who can troubleshoot and diagnose problems with Fridge over the phone. They should be able to guide customers through potential solutions or determine if a technician needs to be dispatched for repairs.</li>
   
         <li><strong>Repair Services:</strong> Offer repair services for Fridge that require professional intervention. Ensure that your technicians are trained to handle various types of Fridge efficiently and effectively.</li>

      <li><strong>Replacement Parts:</strong> Maintain an inventory of commonly needed replacement parts for Fridge. This allows customers to easily purchase parts for DIY repairs or for your technicians to use during service appointments.
</li>
   
          </ul>
         </div>
   </div>
   </div>
   </section>
   
   
   
   
   
   
           <section id="WWO" data-aos="fade-right">
             <div className='container'>
               <div className='row'>
                 <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                   <h5>What We Offer</h5>
                   <p><strong>Expert Technicians:</strong> Our team comprises highly skilled and certified technicians who possess extensive knowledge and experience in servicing all major fridge brands and models.</p>
                   <p><strong>Comprehensive Services:</strong> From routine maintenance to complex repairs, we handle all aspects of fridge servicing with precision and care.</p>
                   <p><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We offer personalized solutions tailored to meet your specific needs and ensure a hassle-free service experience.</p>
                   <p><strong>Quality Assurance:</strong> We use only genuine spare parts and adhere to the highest standards of service quality, guaranteeing the longevity and performance of your fridge.</p>
                   <p><strong>Affordable Pricing:</strong> Our services are competitively priced, offering you the best value without compromising on quality.</p>
                 </div>
               </div>
             </div>
           </section>
   
   

   
   
   <div><Footers/></div>
   
            </>
  )
}
