import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css';

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row">
            {/* Left Side - Address and Numbers */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h5>Address:</h5>
              <p>
                <strong>EXPRESS ENGINEERING (Head Office)</strong>,<br />
                No.8, Sarvodaya 4th Street,<br />
                New Ellis Nagar,<br />
                Madurai-625016.
              </p>
              <h5>Office Number:</h5>
              <p>
                +91 7397070452,<br />
                +91 9600888628
              </p>
              <h5>Support Service Number:</h5>
              <p>
                +91 9790006791,<br />
                +91 9790005712,<br />
                +91 9629398411,<br />
                +91 9944118136
              </p>
              <h5>AMC Booking Number:</h5>
              <p>
                +91 9363139661,<br />
                +91 8148499369
              </p>
            </div>
            
            {/* Right Side - Disclaimer, Terms, Privacy, and Copyright */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h5>Disclaimer:</h5>
              <p>
               <strong>Service E2E</strong>  is an independent, multi-brand home appliance service provider and is not affiliated with or authorized by any appliance manufacturers.<br />
                We are a Multi Brand Service Center.
              </p>
              <div className="footer-links">
                <Link to="/terms-conditions"><strong>Terms & Conditions</strong></Link><br />
                <Link to="/privacy-policy"><strong>Privacy Policy</strong></Link><br />
              </div>
              <p><strong>Copyright &copy; 2025 Service E2E </strong> <br/> <a href="https://e2ewebversesolutions.in/" id="e2ebrand"> Designed By E2E-Web Solutions</a> </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
