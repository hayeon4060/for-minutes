import React from "react";
import "gestalt/dist/gestalt.css";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-3 item">
        <h3>
          <i className="fas fa-compass"></i> &nbsp;
          CATEGORIES</h3>
          <ul>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About Us</a>
            </li>
            <li>
              <a href="#!">Minutes List</a>
            </li>
            <li>
              <a href="#!">Post</a>
            </li>
            
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 item">
          <h3><i className="fas fa-laptop-code"></i>&nbsp;
          Project</h3>
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
        
        <div className="col-md-6 item text">
          <h3>For Minutes</h3>
          <p>"For Minutes" is summary minutes service.</p>
        </div>
      </div>
      <p className="copyright">For-Minutes © 2021</p>
    </div>
  </footer>
);
export default Footer;