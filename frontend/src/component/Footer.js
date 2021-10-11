import React from "react";
import "gestalt/dist/gestalt.css";
import "./Footer.css";

const Footer = () => (
  <footer class="footer-dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-3 item">
          <h3>Home</h3>
          <ul>
            <li>
              <a href="#!">Information</a>
            </li>
            <li>
              <a href="#!">Contact us</a>
            </li>
            
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 item">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#!">Project</a>
            </li>
            <li>
              <a href="#!">Team</a>
            </li>
            <li>
              <a href="#!">Plan</a>
            </li>
          </ul>
        </div>
        
        <div class="col-md-6 item text">
          <h3>For Minutes</h3>
          <p>"For Minutes" is summary minutes service.</p>
        </div>
      </div>
      <p class="copyright">For-Minutes © 2021</p>
    </div>
  </footer>
);
export default Footer;