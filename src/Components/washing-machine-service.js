import React, { useEffect } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
// import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/washer.css';
import WASHERHERO from '../images/WASHERHERO.jpg'
// import PHONECALLPNG from '../images/PHONECALLPNG.png'
// import EMAILPNG from '../images/EMAILPNG.png'
// import WHATSAPPPNG from '../images/WHATSAPPPNG.png'
import WASHSIT from '../images/WASHSIT.jpg'
import WASHDESC from '../images/WASHDESC.webp'

import AOS from 'aos';
import 'aos/dist/aos.css';
 


export default function WASHINGMACHINESERVICE() {

  useEffect(() => {
    window.scrollTo(0, 0); 
    document.title = "Washing Machine  Service";
  }, []);

 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
   useEffect(() => {
    // Reveal animation on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => io.observe(el));
  }, []);
  

  return (
    <>

 

    <div>
            <Navbar />
          </div>
          
          
          <section className="highlight-strip">
  <div className="scroll-container">
    <div className="scroll-track">
      <div className="scroll-content">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to 1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
      <div className="scroll-content">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to 1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
      <div className="scroll-content">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to 1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </div>
</section>

  
         <section id="hero" style={{ backgroundImage: `url(${WASHERHERO})` }} data-aos="fade-up">

        <div className="hero-content reveal up">
          <h1 className="shine">WE ARE READY TO HELP</h1>
          <h3 className="reveal up delay-1">Fast And Reliable Service</h3>
          <a href="tel:+919025312399" className="hero-btn reveal up delay-2">9025312399</a>
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

        <div className="container">
          <h2 className="reveal up">Customer Care Helpline Support</h2>
          <ul>
            <li className="reveal up delay-1"><i className="fas fa-arrow-circle-right"></i> Book Your Complaints For Quality Service</li>
            <li className="reveal up delay-2"><i className="fas fa-arrow-circle-right"></i> Same Day Service Support</li>
            <li className="reveal up delay-3"><i className="fas fa-arrow-circle-right"></i> Well Trained Technicians</li>
            <li className="reveal up delay-4"><i className="fas fa-arrow-circle-right"></i> Affordable Price & Genuine Spares</li>
            <li className="reveal up delay-5"><i className="fas fa-arrow-circle-right"></i> Doorstep Service All Over Tamil Nadu</li>
            <li className="reveal up delay-6"><i className="fas fa-arrow-circle-right"></i> Trusted Professionals</li>
          </ul>

          <h2 className="reveal up">Issues In Washing Machine</h2>
          <ul>
            <li className="reveal up delay-1"><i className="fas fa-arrow-circle-right"></i> Not Turning ON / OFF</li>
            <li className="reveal up delay-2"><i className="fas fa-arrow-circle-right"></i> Noise or Vibration</li>
            <li className="reveal up delay-3"><i className="fas fa-arrow-circle-right"></i> Drum Not Rotating</li>
            <li className="reveal up delay-4"><i className="fas fa-arrow-circle-right"></i> Water Intake Issue</li>
            <li className="reveal up delay-5"><i className="fas fa-arrow-circle-right"></i> Water Not Draining</li>
            <li className="reveal up delay-6"><i className="fas fa-arrow-circle-right"></i> Door Lock Problem</li>
          </ul>

          <h2 className="reveal up">Types Of Washing Machine Service</h2>
          <ul>
            <li className="reveal up delay-1"><i className="fas fa-arrow-circle-right"></i> Top Load</li>
            <li className="reveal up delay-2"><i className="fas fa-arrow-circle-right"></i> Front Load</li>
            <li className="reveal up delay-3"><i className="fas fa-arrow-circle-right"></i> Commercial Machines</li>
          </ul>
        </div>
      </section>

      <section id="WRHY">
        <div className="container">
          <h2 className="reveal up">Why Choose Us?</h2>
        </div>
      </section>

     <section id="WASHMANSIT" data-aos="fade-up">

        <div className="container text-center">
          <img src={WASHSIT} alt="washing machine service" className="float-y reveal up" />
          <p className="reveal up delay-2">
            We are a Fast and Reliable Washing Machine Service Center. We handle all types of Single Door, Double Door, and Side-by-Side Washing Machines with doorstep service across Tamil Nadu. Book your complaint for same-day service. We use only genuine spare parts to ensure lasting performance and full customer satisfaction.
          </p>
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
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10 text-center">
        <h5 data-aos="fade-up">Our Service</h5>
        <p data-aos="fade-up" data-aos-delay="200">
          In Service Center, our mission is to provide unparalleled service excellence through our expertise and commitment to customer satisfaction. We understand the importance of a well-functioning washing machine in your daily life and strive to minimize downtime with our swift and professional service.
        </p>
      </div>

      {/* Icons row */}
      <div className="col-lg-10">
        <div className="ours-icons-grid">
          <div className="ours-icon-box" data-aos="zoom-in" data-aos-delay="200">
            <i className="fas fa-tools"></i>
            <h6>Expert Technicians</h6>
            <p>Trained team with advanced repair skills.</p>
          </div>
          <div className="ours-icon-box" data-aos="zoom-in" data-aos-delay="300">
            <i className="fas fa-sync-alt"></i>
            <h6>Fast Turnaround</h6>
            <p>Same-day service across Tamil Nadu.</p>
          </div>
          <div className="ours-icon-box" data-aos="zoom-in" data-aos-delay="400">
            <i className="fas fa-cogs"></i>
            <h6>Genuine Spares</h6>
            <p>Only original parts used for replacements.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="DESCWASH" data-aos="fade-right">
  <div className="container">
    <div className="row align-items-center">

      {/* 📝 Text on LEFT with fade-right animation */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-right"
      >
        <h3>Washing Machine Customer Support Service</h3>
        <ul>
          <li><strong>Technical Support:</strong> Have a team of skilled technicians who can troubleshoot and diagnose problems with washing machines over the phone...</li>
          <li><strong>Repair Services:</strong> Offer repair services for washing machines that require professional intervention...</li>
          <li><strong>Replacement Parts:</strong> Maintain an inventory of commonly needed replacement parts for washing machines...</li>
        </ul>
      </div>

      {/* 📸 Image on RIGHT with fade-left animation */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-left"
      >
        <img
          src={WASHDESC}
          className="img-fluid"
          alt="washing machine service"
          title="washing machine service"
        />
      </div>

    </div>
  </div>
</section>



{/* <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                <a href='tel:+919025312399'><button>+919025312399</button></a>
                </center>
              </div>
            </div>
          </div>
        </section> */}




      <section id="WWO" data-aos="zoom-in">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-12 col-md-12 col-sm-12 col-12"
        data-aos="fade-up"
      >
        <h5>What We Offer</h5>

        <p><strong> Expert Technicians:</strong> Our team includes experienced and skilled technicians with in-depth knowledge of all types of refrigerators, including single door, double door, and side-by-side models.</p>

        <p><strong> Comprehensive Services:</strong> From regular check-ups to advanced washing machine repairs, we handle every aspect of refrigerator servicing with care and accuracy.</p>

        <p><strong> Customer-Centric Approach:</strong> We focus on your needs and provide customized service solutions to ensure a smooth and satisfying experience.</p>

        <p><strong> Quality Assurance:</strong> We use genuine spare parts and follow high-quality service standards to help preserve your washing machine's performance and durability.</p>

        <p><strong> Affordable Pricing:</strong> Our refrigerator services are reasonably priced, ensuring reliable service without stretching your budget.</p>
      </div>
    </div>
  </div>
</section>


        {/* <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                <a href='tel:+919025312399'><button>+919025312399</button></a>
                </center>
              </div>
            </div>
          </div>
        </section> */}






<div><Footers/></div>

         </>
  )
}
