import React from "react";

import {Link} from "react-router-dom";
import "./Header.css";

function Header (){
    return (
        <header className="header">
            <nav className="navbar">
                <h1 className="logo">Sergi Vila</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}


export default Header;