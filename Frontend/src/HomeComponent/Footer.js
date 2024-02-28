import React from "react";
import "../CSS/Footer.css";
import facebookIcon from "../Images/facebook.png";
import twitterIcon from "../Images/twitter.jpeg";
import instagramIcon from "../Images/instagram.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Welcome to our Hostel Management System! We are dedicated to providing a seamless and efficient experience for managing hostel operations. Our system allows hostel administrators to easily manage room allocations, student details, staff information, feedback, and much more. With user-friendly interfaces and powerful features, hostel management becomes hassle-free and convenient.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: Navratan Bagh, Geeta Bhavan Square</li>
              <li>Email: hostelmanagement@pro.com</li>
              <li>Phone: +1234567890</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-icons">
              <li>
                <a href="facebook.com">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                Facebook
              </li>
              <li>
                <a href="twitter.com">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
                Twitter
              </li>
              <li>
                <a href="instagram.com">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
