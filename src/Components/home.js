import React, { useEffect,useState  } from 'react';
import Navbar from '../Header&Footer/Navbar';
import Footers from '../Header&Footer/Footers';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../Components/home.css';
import HOMEHERO from '../images/HOME.jpg';
import WashingMachine from "./washing machine.png"; // same folder path\
import Fridge from "./fridge.png"; // same folder path\
import WASHERMAN1 from '../images/WASHERMAN1.jpg';
import FRIDGEMAN from '../images/FRIDGEMAN.webp';
import ACMAN1 from '../images/ACMAN1.jpeg';
import TVMAN1 from '../images/TVMAN1.jpg'; 
import MICROWAVEMAN1 from '../images/MICROWAVEMAN1.jpeg';
import WATERHEATERMAN1 from '../images/WATERHEATERMAN1.jpg';
import CHIMNEYMAN1 from '../images/CHIMNEYMAN1.jpg';
import WATERPURIFIERMAN1 from '../images/WATERPURIFIERMAN1.jpg';
import { Helmet } from "react-helmet";

export default function Home() { // Renamed 'home' to 'Home'
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    document.title = " Home Appliance Service";


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

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // digits only, max 10
      const v = value.replace(/\D/g, "").slice(0, 10);
      setFormData((p) => ({ ...p, phone: v }));
      return;
    }
    setFormData((p) => ({ ...p, [name]: value }));
  };

   // submit
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

    // basic validation
    if (!payload.name || !payload.phone || !payload.location || !payload.appliance) {
      alert("Please fill all required fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(payload.phone)) {
      alert("Enter a valid 10-digit Indian mobile number.");  
      return;
    }
    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
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
        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
          appliance: "",
          issue: "",
        });
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

      <div>
        <Navbar/>
      </div>
    {/* <section id="headline">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
            <h2>PROFESSIONAL HOME APPLIANCE SERVICE CENTER IN TAMILNADU</h2>
            
          </div>
        </div>
        
      </div>
    </section> */}
   




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


<section id="hero" style={{ backgroundImage: `url(${HOMEHERO})` }}>
  <div className="hero-content row">
    {/* Left Side Title & Call Buttons */}
    <div className="col-lg-6 hero-text">
      <h1 className="scroll-fade">TRUSTED HOME APPLIANCE SERVICE CENTER</h1>
             </div>



     


    {/* Right Side Form */}
    <div className="col-lg-5 ms-auto form-container position-relative">
      {loading && (
        <div id="spinnerOverlay" className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <form id="bookingForm" onSubmit={handleSubmit} className="form-card shadow-lg">
        <div className="mb-3">
          <input type="text" className="form-control" name="name"
            placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="tel" className="form-control" name="phone"
            placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" name="email"
            placeholder="Your Email (optional)" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="location"
            placeholder="Your Address" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <select name="appliance" className="form-select"
            value={formData.appliance} onChange={handleChange} required>
            <option value="">Select Appliance</option>
            <option>Washing Machine</option>
            <option>AC</option>
            <option>Fridge</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea className="form-control" name="issue" rows="3"
            placeholder="Describe the Issue" value={formData.issue} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-warning fw-bold w-100" disabled={loading}>
          {loading ? "Submitting..." : "📞 Submit"}
        </button>
      </form>
    </div>
  </div>
</section>




        <section id="about">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-12 col-sm-12">
        <h2>OUR SERVICES</h2>

        {/* single service-row with both cards inside */}
        <div className="service-row">
          <div className="service-card">
            <Link
              to="/washing-machine-service"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                className="service-icon"
                src={WashingMachine}
                alt="Washing Machine Service"
              />
              <p className="service-title">Washing Machine Service</p>
            </Link>
          </div>

          <div className="service-card">
            <Link
              to="/fridge-service"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                className="service-icon"
                src={Fridge}
                alt="Fridge Service"
              />
              <p className="service-title">Fridge Service</p>
            </Link>
          </div>
        </div>

        {/* rest of your descriptions */}
       
        {/* etc */}
      </div>
    </div>
  </div>
</section>


<section class="why-us-section py-5 text-center">
  <div class="container">
    <h2 class="section-title mb-4">Why Choose Us?</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-4 col-sm-6">
        <div class="why-card">
          <i class="fas fa-truck fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Free Visit Within 5 KM</h6>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="why-card">
          <i class="fas fa-balance-scale fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Transparent Pricing</h6>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="why-card">
          <i class="fas fa-shield-alt fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Up to 1 Year Warranty</h6>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="why-card">
          <i class="fas fa-user-check fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">Certified Technicians</h6>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="why-card">
          <i class="fas fa-undo fa-2x mb-3 text-primary"></i>
          <h6 class="fw-bold">30 Days Money Back</h6>
        </div>
      </div>
    </div>
  </div>
</section>


        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
              </div>
            </div>
          </div>
        </section>



        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>Washing machine Service</h4>
             <p>Washing machine service refers to the maintenance, repair, and troubleshooting of washing machines to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of washing machine service include:

</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.
              </li>
              <li>Diagnosing issues based on the machine’s behavior, sounds, or error codes displayed.
              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the drum, detergent dispenser, and filters to prevent mold, mildew, and detergent build-up.
              </li>
              <li>Ensuring that hoses and water inlets are free from blockages.
              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as belts, hoses, seals, pumps, and motors.
              </li>
              <li>Ensuring that replacement parts are compatible with the specific washing machine model.
              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.
              </li>
              <li>Fixing mechanical problems related to the drum, agitator, or spin mechanisms.

              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.

              </li>
              <li>Lubricating moving parts and tightening any loose components.
              </li>
            </ul>
            <h5>6.Software Updates:</h5>
            <ul>
              <li>For modersssn washing machines, updating the software or firmware to fix bugs or enhance performance.

              </li>
              
            </ul>
            <h5>7.Operational Checks:</h5>
            <ul>
              <li>Running the machine through a cycle to ensure it operates smoothly after repairs.

              </li>
              <li>Checking that the machine fills, washes, rinses, and spins as expected.

              </li>
              
            </ul>

              </div>
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>

  <div className="slide-wrap">
  <img src={WASHERMAN1} alt="Washing machine service" className="slide-img" />
</div>


</div>
              
</div>
</div>
</section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
               <div class="phone-numbers">



</div>

                </center>
              </div>
            </div>
          </div>
        </section>

        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>Refrigerator Service

              </h4>
             <p>Refrigerator service refers to the maintenance, repair, and troubleshooting of refrigerators to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of refrigerator service include:</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.
              .
              </li>
              <li>Diagnosing issues based on the refrigerator’s behavior, sounds, or error codes displayed.

              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the interior shelves, drawers, and compartments to prevent mold, mildew, and food residue build-up.

              </li>
              <li>Ensuring that condenser coils, vents, and drip pans are free from dust and blockages.

              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as door seals, thermostats, compressors, and fans.

              </li>
              <li>Ensuring that replacement parts are compatible with the specific refrigerator model.

              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.

              </li>
              <li>Fixing mechanical problems related to the compressor, evaporator, or condenser fans.


              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.

              </li>
              <li>Lubricating moving parts and tightening any loose components.

              </li>
            </ul>
            <h5>6.Software Updates:</h5>
            <ul>
              <li>For modern refrigerators, updating the software or firmware to fix bugs or enhance performance.


              </li>
              
            </ul>
            <h5>7.Operational Checks:</h5>
            <ul>
              <li>Running the refrigerator through a cooling cycle to ensure it operates smoothly after repairs.

              </li>
              <li>Checking that the refrigerator cools, defrosts, and maintains the correct temperature as expected.


              </li>
              
            </ul>

              </div>
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>

             <div className="slide-wrap">
  <img src={FRIDGEMAN} alt="Fridge Service" className="slide-img" />
</div>

              </div>
              
            </div>
          </div>
        </section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                <div className="phone-numbers mt-4">
  <a href="tel:+917770005768" className="phone-btn">
    <span className="phone-icon">📞</span> +91 777 000 5768
  </a>
  <a href="tel:+919025312399" className="phone-btn">
    <span className="phone-icon">📞</span> +91 90253 12399
  </a>
</div>

                </center>
              </div>
            </div>
          </div>
        </section>



        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>Air Conditioner Service

              </h4>
             <p>Air conditioner service refers to the maintenance, repair, and troubleshooting of air conditioning units to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of air conditioner service include:</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.
              </li>
              <li>Diagnosing issues based on the air conditioner’s behavior, sounds, or error codes displayed.


              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the air filters, evaporator coils, and condenser coils to prevent mold, mildew, and debris build-up.


              </li>
              <li>Ensuring that the drainage system and vents are free from blockages.


              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as filters, capacitors, thermostats, and fans.


              </li>
              <li>Ensuring that replacement parts are compatible with the specific air conditioner model.


              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.


              </li>
              <li>Fixing mechanical problems related to the compressor, fan motors, or blower assemblies.



              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.


          </li>
          <li>Lubricating moving parts and tightening any loose components.


           </li>
           </ul>
           <h5>6.Software Updates:</h5>
           <ul>
           <li>For modern air conditioners, updating the software or firmware to fix bugs or enhance performance.

           </li>
              
           </ul>
           <h5>7.Operational Checks:</h5>
           <ul>
           <li>Running the air conditioner through a cooling cycle to ensure it operates smoothly after repairs.


           </li>
           <li>Checking that the air conditioner cools, dehumidifies, and maintains the correct temperature as expected.



              </li>
              
            </ul>

              </div>
             <div className="slide-wrap">
              <div className="slide-bg slide-bg--ac" />

  <img src={ACMAN1} alt="AC Service" className="slide-img" />
</div>

              
            </div>
          </div>
        </section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                <div class="phone-numbers-vertical">
  <div>
     <div className="phone-numbers mt-4">
  <a href="tel:+917770005768" className="phone-btn">
    <span className="phone-icon">📞</span> +91 777 000 5768
  </a>
  <a href="tel:+919025312399" className="phone-btn">
    <span className="phone-icon">📞</span> +91 90253 12399
  </a>
</div>

    </div>

</div>

                </center>
              </div>
            </div>
          </div>
        </section>









        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>TV Service

              </h4>
             <p>TV Service refers to the maintenance, repair, and troubleshooting of televisions to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of TV Service include:</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.

              </li>
              <li>Diagnosing issues based on the TV’s behavior, sounds, or error codes displayed.



              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the screen, vents, and ports to prevent dust and debris build-up.



              </li>
              <li>Ensuring that internal components are free from dust and blockages.



              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as remote controls, power supplies, screens, and circuit boards.



              </li>
              <li>Ensuring that replacement parts are compatible with the specific TV model.



              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.



              </li>
              <li>Fixing mechanical problems related to the display, backlighting, or speakers.




              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.



              </li>
              <li>Updating firmware and software to ensure optimal performance.



              </li>
            </ul>
            <h5>6.Software Updates:</h5>
            <ul>
              <li>For modern smart TVs, updating the software or firmware to fix bugs or enhance performance.




              </li>
              
            </ul>
            <h5>7.Operational Checks:</h5>
            <ul>
              <li>Running the TV through a series of tests to ensure it operates smoothly after repairs.


              </li>
              <li>Checking that the TV displays images correctly, produces clear sound, and responds to user inputs as expected.




              </li>
              
            </ul>

              </div>
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>

              <img src={TVMAN1} alt="tv service service" title="tv service service"/>
              </div>
              
            </div>
          </div>
        </section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
               <div class="phone-numbers-vertical">
               <div>
     <div className="phone-numbers mt-4">
  <a href="tel:+917770005768" className="phone-btn">
    <span className="phone-icon">📞</span> +91 777 000 5768
  </a>
  <a href="tel:+919025312399" className="phone-btn">
    <span className="phone-icon">📞</span> +91 90253 12399
  </a>
</div>

    </div>
               </div>


                </center>
              </div>
            </div>
          </div>
        </section>
















        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>Microwave Oven Service

              </h4>
             <p>Microwave oven service refers to the maintenance, repair, and troubleshooting of microwave ovens to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of microwave oven service include:</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.


              </li>
              <li>Diagnosing issues based on the microwave oven’s behavior, sounds, or error codes displayed.




              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the interior and exterior surfaces to prevent food residue and grease build-up.




              </li>
              <li>Ensuring that vents, filters, and waveguides are free from blockages.




              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as door seals, turntables, magnetrons, and control panels.



              </li>
              <li>Ensuring that replacement parts are compatible with the specific microwave oven model.




              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.




              </li>
              <li>Fixing mechanical problems related to the turntable motor, door mechanism, or ventilation system.





              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.




              </li>
              <li>Inspecting and tightening any loose components.




              </li>
            </ul>
            <h5>6.Software Updates:</h5>
            <ul>
              <li>For modern microwave ovens with digital controls, updating the software or firmware to fix bugs or enhance performance.





              </li>
              
            </ul>
            <h5>7.Operational Checks:</h5>
            <ul>
              <li>Running the microwave oven through a heating cycle to ensure it operates smoothly after repairs.



              </li>
              <li>Checking that the microwave heats food evenly, operates quietly, and responds to user inputs as expected.




              </li>
              
            </ul>

              </div>
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>

              <img src={MICROWAVEMAN1} alt="microwave oven service" title="microwave oven service"/>
              </div>
              
            </div>
          </div>
        </section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                <div class="phone-numbers-vertical">
               <div>
     <div className="phone-numbers mt-4">
  <a href="tel:+917770005768" className="phone-btn">
    <span className="phone-icon">📞</span> +91 777 000 5768
  </a>
  <a href="tel:+919025312399" className="phone-btn">
    <span className="phone-icon">📞</span> +91 90253 12399
  </a>
</div>

    </div>
               </div>

                </center>
              </div>
            </div>
          </div>
        </section>



















        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>Water Heater Service

              </h4>
             <p>Water heater service refers to the maintenance, repair, and troubleshooting of water heaters to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of water heater service include:</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.



              </li>
              <li>Diagnosing issues based on the water heater’s behavior, sounds, or error codes displayed.





              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the tank to prevent sediment build-up.





              </li>
              <li>Ensuring that vents, burners, and pilot lights (for gas heaters) are free from blockages.





              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as anode rods, thermostats, heating elements, and pressure relief valves.




              </li>
              <li>Ensuring that replacement parts are compatible with the specific water heater model.





              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.





              </li>
              <li>Fixing mechanical problems related to the heating elements, gas burners, or water circulation pumps.






              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.





              </li>
              <li>Inspecting and tightening any loose components, and checking for leaks.





              </li>
            </ul>
            <h5>6.Software Updates:</h5>
            <ul>
              <li>For modern water heaters with digital controls, updating the software or firmware to fix bugs or enhance performance.






              </li>
              
            </ul>
            <h5>7.Operational Checks:</h5>
            <ul>
              <li>Running the water heater through a heating cycle to ensure it operates smoothly after repairs.




              </li>
              <li>Checking that the water heater heats water to the correct temperature, maintains consistent performance, and responds to user settings as expected.





              </li>
              
            </ul>

              </div>
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>

              <img src={WATERHEATERMAN1} alt="water heater service" title="water heater service"/>
              </div>
              
            </div>
          </div>
        </section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                 <div class="phone-numbers-vertical">
                <div>
     <div className="phone-numbers mt-4">
  <a href="tel:+917770005768" className="phone-btn">
    <span className="phone-icon">📞</span> +91 777 000 5768
  </a>
  <a href="tel:+919025312399" className="phone-btn">
    <span className="phone-icon">📞</span> +91 90253 12399
  </a>
</div>

    </div>
               </div>
                </center>
              </div>
            </div>
          </div>
        </section>




















        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>Chimney Service

              </h4>
             <p>Chimney service refers to the maintenance, repair, and troubleshooting of chimneys to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of chimney service include:

</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.




              </li>
              <li>Diagnosing issues based on the chimney’s condition, draft behavior, or presence of smoke backflow.






              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the flue to remove soot, creosote, and other debris that can cause blockages.






              </li>
              <li>Ensuring that the chimney cap, crown, and vents are free from obstructions and damage.





              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as chimney caps, dampers, flue liners, and flashing.





              </li>
              <li>Ensuring that replacement parts are compatible with the specific chimney system.





              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.





              </li>
              <li>Fixing mechanical problems related to the heating elements, gas burners, or water circulation pumps.






              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.





              </li>
              <li>Inspecting and tightening any loose components, and checking for leaks.





              </li>
            </ul>
            <h5>6.Software Updates:</h5>
            <ul>
              <li>For modern water heaters with digital controls, updating the software or firmware to fix bugs or enhance performance.






              </li>
              
            </ul>
            <h5>7.Operational Checks:</h5>
            <ul>
              <li>Running the water heater through a heating cycle to ensure it operates smoothly after repairs.




              </li>
              <li>Checking that the water heater heats water to the correct temperature, maintains consistent performance, and responds to user settings as expected.





              </li>
              
            </ul>

              </div>
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>

              <img src={CHIMNEYMAN1} alt="chimney service center" title="chimney service center"/>
              </div>
              
            </div>
          </div>
        </section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
                <div class="phone-numbers-vertical">
              <div>
     <div className="phone-numbers mt-4">
  <a href="tel:+917770005768" className="phone-btn">
    <span className="phone-icon">📞</span> +91 777 000 5768
  </a>
  <a href="tel:+919025312399" className="phone-btn">
    <span className="phone-icon">📞</span> +91 90253 12399
  </a>
</div>

    </div>
               </div>
                </center>
              </div>
            </div>
          </div>
        </section>
















        <section id="desc">
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>
              <h4>Water Purifier Service

              </h4>
             <p>Water purifier service refers to the maintenance, repair, and troubleshooting of water purifiers to ensure they function properly and efficiently. This service can be performed by professional technicians or by individuals with the necessary skills. The key components of water purifier service include:

</p>
            <h5>1.Inspection and Diagnosis:</h5>
            <ul>
              <li>Checking for any visible signs of wear, damage, or malfunction.





              </li>
              <li>Diagnosing issues based on the water purifier’s performance, flow rate, or error codes displayed.







              </li>
            </ul>
            <h5>2.Cleaning:</h5>
            <ul>
              <li>Cleaning the exterior and interior components to prevent contamination.







              </li>
              <li>Ensuring that filters, membranes, and storage tanks are free from blockages and build-up.






              </li>
            </ul>
            <h5>3.Parts Replacement:</h5>
            <ul>
              <li>Replacing worn-out or faulty parts such as filters, membranes, UV lamps, and pumps.






              </li>
              <li>Ensuring that replacement parts are compatible with the specific water purifier model.






              </li>
            </ul>
            <h5>4.Electrical and Mechanical Repairs:</h5>
            <ul>
              <li>Addressing electrical issues like faulty wiring, switches, and control panels.






              </li>
              <li>Fixing mechanical problems related to pumps, valves, or water flow systems.







              </li>
            </ul>
            <h5>5.Preventive Maintenance:</h5>
            <ul>
              <li>Regularly scheduled check-ups to prevent future breakdowns.






              </li>
              <li>Inspecting and tightening any loose components, and checking for leaks or other issues.





              </li>
            </ul>
            <h5>6.Software Updates:</h5>
            <ul>
              <li>For modern water purifiers with digital controls, updating the software or firmware to fix bugs or enhance performance.







              </li>
              
            </ul>
            <h5>7.Operational Checks:</h5>
            <ul>
              <li>Running the water purifier through a filtration cycle to ensure it operates smoothly after repairs.




              </li>
              <li>Checking that the water purifier effectively removes contaminants, maintains water flow, and responds to user settings as expected.






              </li>
              
            </ul>

              </div>
              <div className='col-lg-6 col-mg-6 col-sm-12 sol-12'>

              <img src={WATERPURIFIERMAN1} alt="water purifier service" title="water purifier service"/>
              </div>
              
            </div>
          </div>
        </section>

        
        <section id="call-btn">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 colmd-12 col-sm-12 col-12'>
                <center>
               <div class="phone-numbers-vertical">
               <div>
     <div className="phone-numbers mt-4">
  <a href="tel:+917770005768" className="phone-btn">
    <span className="phone-icon">📞</span> +91 777 000 5768
  </a>
  <a href="tel:+919025312399" className="phone-btn">
    <span className="phone-icon">📞</span> +91 90253 12399
  </a>
</div>

    </div>
               </div>
                </center>
              </div>
            </div>
          </div>
        </section>

        
<div><Footers/></div>
    </>
  );
}
