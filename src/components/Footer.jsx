import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="contact-links">
          <li><a href="https://linkedin.com/in/sergi-vila-marin" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/100451218" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://drive.google.com/file/d/1aMcnA2doclezht_MZaCpyAVMdehQnThh/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
        <div className="contact-info">
          <p>+34 629 50 55 54</p>
          <p>sergivi9@gmail.com</p>
        </div>
      </div>
        
      
    </footer>
  );
}

export default Footer;
