import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footers.css';

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
                No-4, Power House Road, TPK Road,<br />
                Madurai-625001.
              </p>
             
            </div>
            
            {/* Right Side - Disclaimer, Terms, Privacy, and Copyright */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h5>Disclaimer:</h5>
              <p>
  This is an independent service provider offering repair and maintenance for various home appliances. We are not affiliated with, authorized by, or endorsed by any appliance manufacturers or brand owners. We do not use or display any brand trademarks, logos, or copyrighted materials.
</p>

              <div className="footer-links">
                <Link to="/terms-conditions"><strong>Terms & Conditions</strong></Link><br />
                <Link to="/privacy-policy"><strong>Privacy Policy</strong></Link><br />
              </div>
              <p><strong>Copyright &copy; 2025 Service E2E </strong> </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
