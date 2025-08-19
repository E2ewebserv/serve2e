import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/washer.css';
import WASHERHERO from '../images/WASHERHERO.jpg'
import PHONECALLPNG from '../images/PHONECALLPNG.png'
import EMAILPNG from '../images/EMAILPNG.png'
import WHATSAPPPNG from '../images/WHATSAPPPNG.png'
import WASHSIT from '../images/WASHSIT.jpg'
import WASHDESC from '../images/WASHDESC.webp'
import { Helmet } from "react-helmet";

export default function WASHINGMACHINESERVICE() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
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
                <h2>Professional Washing Machine Repair & Service in Tamil Nadu

</h2>
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
    
          <section id="hero" style={{ backgroundImage: `url(${WASHERHERO})` }}>
              <div className="hero-content">
                <h1>WE ARE READY TO HELP</h1>
                <h3>Fast And Reliable Service</h3>
                
                <a href="tel:+919790006791" className="hero-btn">+919790006791</a>
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
       <li> <i class='fas fa-arrow-circle-right'></i>Book Your Complaints For Quality Service</li>
          <li> <i class='fas fa-arrow-circle-right'></i>We Aim to Complete Service on the Same Day</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Well Skill Trained Technicians</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Quality Service Affordable Price</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Door Step Service Center</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Trusted Professional Technicians</li>
        </ul>

        <h2>Issues In Washing Machine</h2>
        <ul>
          <li> <i class='fas fa-arrow-circle-right'></i>Washing Machine On-Off Problem</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Noise in The Washing Machine</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Drum Not Rotate Problem</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Water Intake Problem</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Water Not Draining Problem</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Water Over Flow Problem</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Door Not Lock Problem</li>
        </ul>

        <h2>Types Of Washing Machine Service</h2>
        <ul>
          <li> <i class='fas fa-arrow-circle-right'></i>Top Load Washing Machine Service</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Front Load Washing Machine Service</li>
          <li> <i class='fas fa-arrow-circle-right'></i>Commercial Washing Machine Service</li>
          
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
    <img src={WASHSIT} alt="washing machine service" title="washing machine service"/>
    </center>
     <p>We are a Fast and Reliable Washing Machine Service Center. We handle all types of Single Door, Double Door, and Side-by-Side Refrigerators with doorstep service across Tamil Nadu. Book your complaint for same-day service. We focus on quality service and use genuine spare parts to maintain lasting performance and customer satisfaction.</p>
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
      <h5>Fast And Reliable Service</h5>
      </center>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
        <center id="border">
      <div className="star" id="STARRATE">&#9733;</div>
      <h5>Washing Machine Service Center</h5>
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












{/* <section id="WRHY">
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-12'>

      <h2>Customer Testimonials</h2>

      </div>
</div>
</div>
</section> */}
{/* 

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


<p>With over 11 years of dedicated experience in the industry, Our Service Center is your trusted partner for all Washing Machine service needs. Since our inception, we have committed ourselves to delivering top-notch, reliable, and efficient services, ensuring that your appliances operate at their best.</p>

</div>
</div>
</section>
 */}





<section id="ours">
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-12'>

      <h5>Our Service</h5>
      <p>In Service Center, our mission is to provide unparalleled service excellence through our expertise and commitment to customer satisfaction. We understand the importance of a well-functioning washing machine in your daily life and strive to minimize downtime with our swift and professional service.</p>

      </div>
</div>
</div>
</section>



<section id="DESCWASH">
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-12 col-12'>

      <img src={WASHDESC} className="img-fluid" alt="washing machine service" title='washing machine service'/>

      </div>
      <div className='col-lg-6 col-md-6 col-sm-12 col-12'>

     <h3>Washing Machine Customer Support Service</h3>
     <ul>
      <li><strong>Technical Support:</strong> Have a team of skilled technicians who can troubleshoot and diagnose problems with washing machines over the phone. They should be able to guide customers through potential solutions or determine if a technician needs to be dispatched for repairs.</li>

      <li><strong>Repair Services:</strong> Offer repair services for washing machines that require professional intervention. Ensure that your technicians are trained to handle various types of washing machines efficiently and effectively.</li>

      <li><strong>Replacement Parts:</strong> Maintain an inventory of commonly needed replacement parts for washing machines. This allows customers to easily purchase parts for DIY repairs or for your technicians to use during service appointments.

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
                <a href='tel:+919790006791'><button>+919790006791</button></a>
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
              <p><strong>Expert Technicians:</strong> Our team includes experienced and skilled technicians with in-depth knowledge of all types of refrigerators, including single door, double door, and side-by-side models.</p>
<p><strong>Comprehensive Services:</strong> From regular check-ups to advanced Washing machine repairs, we handle every aspect of refrigerator servicing with care and accuracy.</p>
<p><strong>Customer-Centric Approach:</strong> We focus on your needs and provide customized service solutions to ensure a smooth and satisfying experience.</p>
<p><strong>Quality Assurance:</strong> We use genuine spare parts and follow high-quality service standards to help preserve your washing machine performance and durability.</p>
<p><strong>Affordable Pricing:</strong> Our refrigerator services are reasonably priced, ensuring reliable service without stretching your budget.</p>

              </div>
            </div>
          </div>
        </section>

        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                <a href='tel:+919790006791'><button>+919790006791</button></a>
                </center>
              </div>
            </div>
          </div>
        </section>






<div><Footers/></div>

         </>
  )
}
