import React from "react";

import {Link} from "react-router-dom";
import "./Header.css";

function Header (){
    return (
        <header className="header">
            <nav className="navbar">
                <h1>Sergi Vila</h1>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;