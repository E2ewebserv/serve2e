import React, { useEffect, useState } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
import { Link } from 'react-router-dom';
import '../Components/home.css';
import HOMEHERO from '../images/HOME.jpg';
import WashingMachine from "../images/washing machine.png";
import Fridge from "../images/fridge.png";
import WASHERMAN1 from '../images/WASHERMAN1.jpg';
import FRIDGEMAN from '../images/FRIDGEMAN.webp';
import ACMAN1 from '../images/ACMAN1.jpeg';
import TVMAN1 from '../images/TVMAN1.jpg';
import MICROWAVEMAN1 from '../images/MICROWAVEMAN1.jpeg';
import WATERHEATERMAN1 from '../images/WATERHEATERMAN1.jpg';
import CHIMNEYMAN1 from '../images/CHIMNEYMAN1.jpg';
import WATERPURIFIERMAN1 from '../images/WATERPURIFIERMAN1.jpg';
import AC from '../images/AC.png';
import TV from '../images/TV.png';
import MicrowaveOven from '../images/MicrowaveOven.png';
import WaterHeater from '../images/WaterHeater.png';
import WaterPurifier from '../images/WaterPurifier.png';
import "animate.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home Appliance Service";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    appliance: "",
    issue: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const v = value.replace(/\D/g, "").slice(0, 10);
      setFormData((p) => ({ ...p, phone: v }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      location: formData.location.trim(),
      issue: formData.issue.trim(),
      toMail: "e2ewebservice@gmail.com",
    };

    if (!payload.name || !payload.phone || !payload.location) {
      alert("Please fill all required fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(payload.phone)) {
      alert("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (payload.email && !/^\S+@\S+\.\S+$/.test(payload.email)) {
      alert("Enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://mail-backend-zone-ga.onrender.com/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        alert(data?.message || "Booking submitted successfully!");
        setFormData({ name: "", phone: "", email: "", location: "", appliance: "", issue: "" });
      } else {
        alert(data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
<section class="highlight-strip">
  <div class="scroll-container">
    <div class="scroll-track">
      <div class="scroll-content">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to-1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
      <div class="scroll-content">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to-1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
      <div class="scroll-content">
        🚚 Free Visit Within 5 KM &nbsp;&nbsp;&nbsp;
        🛠️ Up to-1 Year Spare Warranty &nbsp;&nbsp;&nbsp;
        🧰 Transparent Spare Parts Pricing &nbsp;&nbsp;&nbsp;
        🔁 30 Days Money Back If Not Satisfied * &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </div>
</section>


      
<section id="hero" style={{ backgroundImage: `url(${HOMEHERO})` }}>
  <div className="hero-content">
    <div className="hero-text animate__animated animate__fadeInLeft">
      <h1 className="hero-title">
        <span className="brand">
          <span className="chunk orange">SERV</span>&nbsp;
          <span className="chunk red">E</span>
          <span className="chunk blue">2</span>
          <span className="chunk orange">E</span>
        </span>
        <span className="title-rest">
          TRUSTED HOME APPLIANCE <br /> SERVICE CENTER
        </span>
      </h1>
    </div>

    <div className="form-container animate__animated animate__fadeInRight">
      <form className="form-card" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email (optional)" value={formData.email} onChange={handleChange} />
        <input type="text" name="location" placeholder="Your Address" value={formData.location} onChange={handleChange} required />
        <textarea name="issue" rows="3" placeholder="Describe the Issue" value={formData.issue} onChange={handleChange}></textarea>
        <button type="submit" className="btn-glow" disabled={loading}>
          {loading ? "Submitting..." : "📞 Submit"}
        </button>
      </form>
    </div>
  </div>
</section>


   
 
    
       <section id="about">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="section-title">OUR SERVICES</h2>

        <div className="service-row">
          <div className="service-card" data-aos="fade-up" data-aos-delay="0">
            <Link to="/washing-machine-service" className="service-link">
              <img className="service-icon" src={WashingMachine} alt="Washing Machine" />
              <p className="service-title">Washing Machine</p>
            </Link>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <Link to="/fridge-service" className="service-link">
              <img className="service-icon" src={Fridge} alt="Fridge" />
              <p className="service-title">Fridge</p>
            </Link>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <Link to="/ac-service" className="service-link">
              <img className="service-icon" src={AC} alt="AC" />
              <p className="service-title">AC</p>
            </Link>
          </div>

         <div className="service-card" data-aos="fade-up" data-aos-delay="300">
  <Link to="/tv-service" className="service-link">
    <img className="service-icon" src={TV} alt="TV" />
    <p className="service-title">TV</p>
  </Link>
</div>


          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <Link to="/microwave-oven-service" className="service-link">
              <img className="service-icon" src={MicrowaveOven} alt="Microwave Oven" />
              <p className="service-title">Microwave Oven</p>
            </Link>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="500">
            <Link to="/water-heater-service" className="service-link">
              <img className="service-icon" src={WaterHeater} alt="Water Heater" />
              <p className="service-title">Water Heater</p>
            </Link>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="600">
            <Link to="/water-purifier-service" className="service-link">
              <img className="service-icon" src={WaterPurifier} alt="Water Purifier" />
              <p className="service-title">Water Purifier</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="why-us-section py-5 text-center">
  <div class="container">
    <h2 class="section-title mb-4" data-aos="fade-up">Why Choose Us?</h2>
    
    <div class="row justify-content-center g-4">
      <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="0">
        <div class="why-card">
          <i class="fas fa-truck fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Free Visit Within 5 KM</h6>
        </div>
      </div>
      
      <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
        <div class="why-card">
          <i class="fas fa-balance-scale fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Transparent Pricing</h6>
        </div>
      </div>
      
      <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
        <div class="why-card">
          <i class="fas fa-shield-alt fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Up to 1 Year Warranty</h6>
        </div>
      </div>
      
      <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="300">
        <div class="why-card">
          <i class="fas fa-user-check fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Certified Technicians</h6>
        </div>
      </div>
      
      <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
        <div class="why-card">
          <i class="fas fa-undo fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">30 Days Money Back</h6>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about-e2e">
  <div className="container">
    <div className="row align-items-center">
      <h2>About</h2>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 about-text">
        <h2>
          <span className="brand">
            <span className="chunk orange">SERV</span>&nbsp;
            <span className="chunk red">E</span>
            <span className="chunk blue">2</span>
            <span className="chunk orange">E</span>
          </span>
        </h2>

       <p>
  <strong>We SERV E2E</strong>, a trusted multi-brand home appliance service provider across Tamil Nadu.  
  We provides services in <strong>Washing Machine Service, AC Service, Refrigerator Service, TV Service, Microwave Oven Service, Water Purifier Service, and Water Heater Service</strong>  offering expert solutions with on-time support and guaranteed quality.
</p>

        <p>
          Thanks to our well-trained technicians and time-bound service, <strong>we've proudly completed 5+ successful years</strong> with happy customers in every corner of Tamil Nadu.
        </p>

        <p>
          <strong>Quality, punctuality, and trust</strong> — that’s what makes SERV E2E your most reliable service partner!
        </p>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-12 about-img">
        <img src="/images/e2e-service.jpg" alt="SERV E2E Team" />
      </div>
    </div>
  </div>
</section>




<section id="desc">
  <div className="container">
    <div className="row">
       <h2 className="section-title">OUR SERVICES</h2>
      
      {/* Left: Text with AOS */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <h4>Washing Machine Service</h4>
        <p>
          Washing machine service refers to the maintenance, repair, and troubleshooting of washing machines to ensure they function properly and efficiently.
        </p>

        <h5>1. Inspection and Diagnosis:</h5>
        <ul>
          <li>Checking for any visible signs of wear, damage, or malfunction.</li>
          <li>Diagnosing issues based on the machine’s behavior, sounds, or error codes displayed.</li>
        </ul>

        <h5>2. Cleaning:</h5>
        <ul>
          <li>Cleaning the drum, detergent dispenser, and filters to prevent mold and detergent build-up.</li>
          <li>Ensuring hoses and inlets are free from blockages.</li>
        </ul>

        <h5>3. Parts Replacement:</h5>
        <ul>
          <li>Replacing belts, hoses, seals, pumps, or motors.</li>
          <li>Using parts compatible with the washing machine model.</li>
        </ul>

        <h5>4. Electrical and Mechanical Repairs:</h5>
        <ul>
          <li>Fixing wiring, switches, and control panels.</li>
          <li>Repairing drum, agitator, or spin mechanisms.</li>
        </ul>

        <h5>5. Preventive Maintenance:</h5>
        <ul>
          <li>Regular check-ups to prevent breakdowns.</li>
          <li>Lubricating parts and tightening components.</li>
        </ul>

        <h5>6. Software Updates:</h5>
        <ul>
          <li>Updating firmware for performance improvements (smart machines).</li>
        </ul>

        <h5>7. Operational Checks:</h5>
        <ul>
          <li>Running a full cycle test post-repair.</li>
          <li>Ensuring proper fill, wash, rinse, and spin.</li>
        </ul>
      </div>

      {/* Right: Image (STATIC / STICKY) */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="slide-wrap no-animate">
          <img
            src={WASHERMAN1}
            alt="Washing Machine Service"
            className="slide-img img-fluid"
          />
        </div>
      </div>

    </div>
  </div>
</section>


       <section id="desc">
  <div className="container">
    <div className="row">
      
      {/* Left: Text with AOS */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-left"
        data-aos-duration="900"
      >
        <h4>Refrigerator Service</h4>
        <p>
          Refrigerator service refers to the maintenance, repair, and troubleshooting of refrigerators to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of refrigerator service include:
        </p>

        <h5>1. Inspection and Diagnosis:</h5>
        <ul>
          <li>Checking for any visible signs of wear, damage, or malfunction.</li>
          <li>Diagnosing issues based on the refrigerator’s behavior, sounds, or error codes displayed.</li>
        </ul>

        <h5>2. Cleaning:</h5>
        <ul>
          <li>Cleaning the interior shelves, drawers, and compartments to prevent mold, mildew, and food residue build-up.</li>
          <li>Ensuring that condenser coils, vents, and drip pans are free from dust and blockages.</li>
        </ul>

        <h5>3. Parts Replacement:</h5>
        <ul>
          <li>Replacing worn-out or faulty parts such as door seals, thermostats, compressors, and fans.</li>
          <li>Ensuring that replacement parts are compatible with the specific refrigerator model.</li>
        </ul>

        <h5>4. Electrical and Mechanical Repairs:</h5>
        <ul>
          <li>Addressing electrical issues like faulty wiring, switches, and control panels.</li>
          <li>Fixing mechanical problems related to the compressor, evaporator, or condenser fans.</li>
        </ul>

        <h5>5. Preventive Maintenance:</h5>
        <ul>
          <li>Regularly scheduled check-ups to prevent future breakdowns.</li>
          <li>Lubricating moving parts and tightening any loose components.</li>
        </ul>

        <h5>6. Software Updates:</h5>
        <ul>
          <li>For modern refrigerators, updating the software or firmware to fix bugs or enhance performance.</li>
        </ul>

        <h5>7. Operational Checks:</h5>
        <ul>
          <li>Running the refrigerator through a cooling cycle to ensure it operates smoothly after repairs.</li>
          <li>Checking that the refrigerator cools, defrosts, and maintains the correct temperature as expected.</li>
        </ul>
      </div>

      {/* Right: Image (NO AOS), sticky on desktop */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="slide-wrap no-animate">
          <img
            src={FRIDGEMAN}
            alt="Fridge Service"
            className="slide-img img-fluid"
          />
        </div>
      </div>

    </div>
  </div>
</section>



<section id="desc">
  <div className="container">
    <div className="row">
      
      {/* Left Side: Text with AOS */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <h4>Air Conditioner (AC) Service</h4>
        <p>
          AC service involves the maintenance, repair, and optimization of air conditioning units to ensure efficient cooling, energy savings, and extended equipment lifespan.
        </p>

        <h5>1. Inspection and Diagnosis:</h5>
        <ul>
          <li>Check for leaks, unusual noises, and abnormal cooling behavior.</li>
          <li>Diagnose faults using pressure readings, electrical tests, or error codes.</li>
        </ul>

        <h5>2. Filter & Coil Cleaning:</h5>
        <ul>
          <li>Clean or replace air filters to improve air quality and airflow.</li>
          <li>Clean evaporator and condenser coils to ensure efficient heat exchange.</li>
        </ul>

        <h5>3. Gas Refilling:</h5>
        <ul>
          <li>Check refrigerant levels and recharge with proper gas type if necessary.</li>
          <li>Inspect for any gas leakage and seal if needed.</li>
        </ul>

        <h5>4. Electrical & Component Check:</h5>
        <ul>
          <li>Inspect wiring, capacitors, contactors, relays, and PCB boards.</li>
          <li>Ensure thermostat and remote control are working properly.</li>
        </ul>

        <h5>5. Drainage & Water Leakage Fix:</h5>
        <ul>
          <li>Unclog drain pipe to prevent water leakage.</li>
          <li>Fix insulation issues to avoid condensation problems.</li>
        </ul>

        <h5>6. Preventive Maintenance:</h5>
        <ul>
          <li>Scheduled service to avoid major breakdowns during peak usage.</li>
          <li>Lubricate moving parts and check compressor health.</li>
        </ul>

        <h5>7. Performance Testing:</h5>
        <ul>
          <li>Run complete cycle to test cooling, noise level, and airflow.</li>
        </ul>
      </div>

      {/* Right Side: AC Image (No Animation) */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="slide-wrap no-animate">
          <img
            src={ACMAN1} // replace with your AC image variable
            alt="AC Service"
            className="slide-img img-fluid"
          />
        </div>
      </div>

    </div>
  </div>
</section>


    


      <section id="desc">
  <div className="container">
    <div className="row">

      {/* Left: TV Service Text (fade-right) */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <h4>TV Service</h4>
        <p>
          TV Service refers to the maintenance, repair, and troubleshooting of televisions to ensure they function properly and efficiently.
        </p>

        <h5>1. Inspection and Diagnosis:</h5>
        <ul>
          <li>Checking for visible signs of wear, damage, or malfunction.</li>
          <li>Diagnosing issues based on the TV’s behavior, sounds, or error codes.</li>
        </ul>

        <h5>2. Cleaning:</h5>
        <ul>
          <li>Cleaning the screen, vents, and ports to prevent dust build-up.</li>
          <li>Cleaning internal components safely if needed.</li>
        </ul>

        <h5>3. Parts Replacement:</h5>
        <ul>
          <li>Replacing remotes, power boards, screens, or logic boards.</li>
          <li>Using model-compatible spare parts.</li>
        </ul>

        <h5>4. Electrical and Mechanical Repairs:</h5>
        <ul>
          <li>Fixing wiring, buttons, and control issues.</li>
          <li>Resolving display, sound, or speaker issues.</li>
        </ul>

        <h5>5. Preventive Maintenance:</h5>
        <ul>
          <li>Regular cleaning and performance check-ups.</li>
          <li>Updating software and checking all inputs/outputs.</li>
        </ul>

        <h5>6. Software Updates:</h5>
        <ul>
          <li>Updating firmware for smart TVs to improve performance and features.</li>
        </ul>

        <h5>7. Operational Checks:</h5>
        <ul>
          <li>Testing picture, sound, HDMI ports, and remote response.</li>
        </ul>
      </div>

      {/* Right: TV Image (animated from right) */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-12"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="slide-wrap">
          <img
            src={TVMAN1}
            alt="TV Service"
            title="TV Service"
            className="slide-img img-fluid"
          />
        </div>
      </div>

    </div>
  </div>
</section>


        


        <section id="microwave-service" className="py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Text Section */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0"
        data-aos="fade-right"
      >
        <h4>Microwave Oven Service</h4>
        <p>
          Microwave oven service involves diagnosing, repairing, and maintaining ovens to ensure they heat food efficiently and operate safely. Regular service can extend the lifespan of the appliance and prevent costly breakdowns.
        </p>
        <h5>1. Inspection and Diagnosis:</h5>
        <ul>
          <li>Check for sparking, burnt smell, or abnormal noise.</li>
          <li>Test heating functionality and control panel responsiveness.</li>
        </ul>
        <h5>2. Cleaning:</h5>
        <ul>
          <li>Remove grease and food buildup from interior and door seals.</li>
          <li>Clean vents and external casing.</li>
        </ul>
        <h5>3. Parts Replacement:</h5>
        <ul>
          <li>Replace magnetron, turntable motor, fuses, and control boards if faulty.</li>
          <li>Ensure OEM spare compatibility for safety and performance.</li>
        </ul>
        <h5>4. Electrical and Mechanical Repairs:</h5>
        <ul>
          <li>Fix broken buttons, switches, or damaged wiring.</li>
          <li>Resolve issues with door latches, timers, and heating coils.</li>
        </ul>
        <h5>5. Preventive Maintenance:</h5>
        <ul>
          <li>Routine service checks to avoid sudden failures.</li>
          <li>Software or firmware updates if applicable.</li>
        </ul>
        <h5>6. Operational Test:</h5>
        <ul>
          <li>Heat test to verify proper operation and power levels.</li>
          <li>Final safety inspection before handover.</li>
        </ul>
      </div>

      {/* Image Section */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 text-center"
        data-aos="fade-left"
      >
        <img
          src={MICROWAVEMAN1} // replace with actual image import
          alt="Microwave Oven Service"
          className="img-fluid rounded shadow-sm"
        />
      </div>
    </div>
  </div>
</section>


        

<section id="water-heater-service" className="py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Text Content */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0"
        data-aos="fade-right"
      >
        <h4>Water Heater Service</h4>
        <p>
          Water heater service involves inspecting, maintaining, and repairing geysers or water heaters to ensure consistent hot water supply and safe usage. Regular maintenance improves efficiency and extends lifespan.
        </p>

        <h5>1. Inspection and Diagnosis:</h5>
        <ul>
          <li>Check for leakage, rust, or unusual noises.</li>
          <li>Test thermostat, heating element, and water flow.</li>
        </ul>

        <h5>2. Cleaning:</h5>
        <ul>
          <li>Descale the tank to remove sediment and hard water buildup.</li>
          <li>Clean inlet/outlet pipes and valves.</li>
        </ul>

        <h5>3. Parts Replacement:</h5>
        <ul>
          <li>Replace faulty heating element, thermostat, or pressure valve.</li>
          <li>Ensure all parts match brand specifications.</li>
        </ul>

        <h5>4. Electrical & Plumbing Fixes:</h5>
        <ul>
          <li>Address wiring issues, switch faults, and grounding safety.</li>
          <li>Fix leaking joints, pipes, or pressure release faults.</li>
        </ul>

        <h5>5. Preventive Maintenance:</h5>
        <ul>
          <li>Scheduled annual check-up for safety and efficiency.</li>
          <li>Insulate pipes and inspect tank lining.</li>
        </ul>

        <h5>6. Operational Check:</h5>
        <ul>
          <li>Run full heating cycle for proper performance validation.</li>
          <li>Ensure proper shut-off, heating speed, and pressure levels.</li>
        </ul>
      </div>

      {/* Image Section */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 text-center"
        data-aos="fade-left"
      >
        <img
          src={WATERHEATERMAN1} // replace with actual image import
          alt="Water Heater Service"
          className="img-fluid rounded shadow-sm"
        />
      </div>
    </div>
  </div>
</section>
        
       
<section id="chimney-service" className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center flex-column-reverse flex-md-row">
      
      {/* Image First - Left Side on Desktop */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 text-center"
        data-aos="zoom-in-up"
      >
        <img
          src={CHIMNEYMAN1} // replace this with your actual image import
          alt="Chimney Service"
          className="img-fluid rounded shadow-sm"
        />
      </div>

      {/* Text Content */}
      <div
        className="col-lg-6 col-md-6 col-sm-12"
        data-aos="fade-left"
      >
        <h4>Chimney Service</h4>
        <p>
          Chimney service ensures safe ventilation, optimal suction, and hygiene by cleaning, inspecting, and repairing chimney units installed in kitchens. Periodic service prevents fire hazards and maintains efficiency.
        </p>

        <h5>1. Deep Cleaning:</h5>
        <ul>
          <li>Remove accumulated grease, oil, and dust from filters & duct.</li>
          <li>Clean the motor, blower, and chimney hood thoroughly.</li>
        </ul>

        <h5>2. Filter & Motor Check:</h5>
        <ul>
          <li>Check baffle/cassette filters for clogging or damage.</li>
          <li>Test motor suction speed and operational noise.</li>
        </ul>

        <h5>3. Electrical Inspection:</h5>
        <ul>
          <li>Verify switchboard, wiring, and light functionality.</li>
          <li>Address sparking, noise, or short-circuit issues.</li>
        </ul>

        <h5>4. Parts Replacement:</h5>
        <ul>
          <li>Replace damaged filters, motors, or control panels.</li>
          <li>Ensure all parts match the chimney brand specs.</li>
        </ul>

        <h5>5. Preventive Maintenance:</h5>
        <ul>
          <li>Quarterly or half-yearly service based on usage.</li>
          <li>Educate customer on safe usage and cleaning tips.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
      
<section id="water-purifier-service" className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center">

      {/* Text Content */}
      <div
        className="col-lg-6 col-md-6 col-sm-12"
        data-aos="fade-right"
      >
        <h4>Water Purifier Service</h4>
        <p>
          Water purifier service ensures safe and clean drinking water by maintaining the internal filtration system, checking TDS levels, and replacing filters when necessary.
        </p>

        <h5>1. Filter Replacement:</h5>
        <ul>
          <li>Replace pre-filters, carbon filters, RO membranes, and UV lamps.</li>
          <li>Ensure compatibility with brand and purifier model.</li>
        </ul>

        <h5>2. TDS Check & Calibration:</h5>
        <ul>
          <li>Test Total Dissolved Solids (TDS) to ensure safe drinking level.</li>
          <li>Adjust TDS controller as per water source.</li>
        </ul>

        <h5>3. Leak Inspection:</h5>
        <ul>
          <li>Check all inlets, outlets, pipes, and filters for water leakage.</li>
          <li>Secure joints and replace faulty O-rings or pipes.</li>
        </ul>

        <h5>4. Electrical & UV Check:</h5>
        <ul>
          <li>Test the power supply, UV bulb, and system circuit board.</li>
          <li>Fix low power or indicator light issues.</li>
        </ul>

        <h5>5. Cleaning & Sanitization:</h5>
        <ul>
          <li>Clean storage tank and sanitize water pathways to avoid bacterial growth.</li>
          <li>Flush system after servicing.</li>
        </ul>
      </div>

      {/* Image Section */}
      <div
        className="col-lg-6 col-md-6 col-sm-12 text-center"
        data-aos="zoom-in-left"
      >
        <img
          src={WATERPURIFIERMAN1} // replace with your image variable
          alt="Water Purifier Service"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </div>
</section>
        
               
<div>
  <Footers/></div>
    </>
  );
}
