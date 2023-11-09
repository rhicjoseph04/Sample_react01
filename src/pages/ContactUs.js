import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './ContactUs.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import the icons from react-icons

function ContactUs() {
  const { user } = useAuth0();

  return (
    <div>
      <Nav />
 <div className="contactUs"> 
 <h1>Tell us your thoughts {user ? ` ${user.name}` : 'Guest'}</h1>
  <div className="title">
    <h2>Get in Touch</h2>
  </div>
  <div className="box">
    {/* Form */}
    <div className="contact form">
      <h3>Send a Message</h3>
      <form>
        <div className="formBox">
          <div className="row50">
            <div className="inputBox">
              <span>First Name</span>
              <input type="text" placeholder="Your First Name" />
            </div>
            <div className="inputBox">
              <span>Last Name</span>
              <input type="text" placeholder="Your Last Name" />
            </div>
          </div>
          <div className="row50">
            <div className="inputBox">
              <span>Email Address</span>
              <input type="text" placeholder="Your Email Address" />
            </div>
            <div className="inputBox">
              <span>Mobile</span>
              <input type="text" placeholder="Your Mobile Number" />
            </div>
          </div>
          <div className="row100">
            <div className="inputBox">
              <span>Message</span>
              <textarea placeholder="Write your message here..."></textarea>
            </div>
          </div>
          <div className="row100">
            <div className="inputBox">
              <input type="submit" value="Send" style={{ background: '#FFA500', color: '#fff' }} />
            </div>
          </div>
        </div>
      </form>
    </div>

    {/* Info Box */}


    <div className="contact info">
  <h3>Contact Info</h3>
  <div className="infoBox">
    <div>
      <span>
        <FaMapMarkerAlt />
      </span>
      <p>123 Pi Coin Street, Pi Network <br /> Pi World</p>
    </div>
    <div>
      <span>
        <FaEnvelope /> 
      </span>
      <a href="mailto:pinetworkinternational@gmail.com">pinetworkinternational@gmail.com</a>
    </div>
    <div>
      <span>
        <FaPhone />
      </span>
      <a href="tel:+639291285634">+63 929 128 56 34</a>
    </div>
    
   
    <ul className="sci">
      <li>
        <a href="#">
          <FaFacebook /> 
        </a>
      </li>
      <li>
        <a href="#">
          <FaInstagram /> 
        </a>
      </li>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedin /> 
        </a>
      </li>
    </ul>
  </div>
</div>

          {/* Map */}
          <div className="contact map">
  <iframe
    src="https://www.openstreetmap.org/export/embed.html?bbox=121.03813489999999%2C14.636140999999999%2C121.03813489999999%2C14.636140999999999&amp;layer=mapnik"
    width="600"
    height="450"
    frameBorder="0"
    title="Pi Network Location"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;





