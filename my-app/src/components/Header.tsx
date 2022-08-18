import "./HeaderStyle.css";

import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import React from 'react';

const Header = () => {
    return(
        <header>
            <img src={Logo} alt="Page logo" className="logo" />
           <div className="navigator">
                <ul>
                    <Link to="/" className= "navigator-item">Home</Link>
                </ul>
                <ul>
                    <Link to="/" className= "navigator-item">Students</Link>
                </ul>
                <ul>
                    <Link to="/" className= "navigator-item">Groups</Link>
                </ul>
                <ul>
                    <Link to="/" className= "navigator-item">Courses</Link>
                </ul>
                <ul>
                    <Link to="/" className= "navigator-item">Professors</Link>
                </ul>
            </div>
        </header>
    )
};

export default Header;