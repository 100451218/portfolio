import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <ul className="social-links">
        <li><a href="https://linkedin.com/in/sergi-vila-marin" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/100451218" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://drive.google.com/file/d/1aMcnA2doclezht_MZaCpyAVMdehQnThh/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        <li id="Phone"><p>Phone: +34 629 50 55 54  &nbsp; &nbsp;&nbsp;email: sergivi9@gmail.com</p></li>
      </ul>
    </footer>
  );
}

export default Footer;
