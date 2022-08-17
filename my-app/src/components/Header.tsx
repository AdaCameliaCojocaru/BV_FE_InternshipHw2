import "./HeaderStyle.css";

import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import React from 'react';

// import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <img src={Logo} alt="Page logo" className="logo" />
            {/* <h3 className="title">University Administration</h3> */}
            {/* <ul className="navigator-list">
                <li><Link to="/" className="navigator-list-item">Home</Link></li>
                <li><Link to="/" className="navigator-list-item">Students</Link></li>
                <li><Link to="/" className="navigator-list-item">Groups</Link></li>
                <li><Link to="/" className="navigator-list-item">Courses</Link></li>
                <li><Link to="/" className="navigator-list-item">Teachers</Link></li>
            </ul>
           <div className="nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            <div className="menu-items">
                <div className="menu-items-list">
                    <li><Link to="/" className="navigator-list-item side-menu-item">Home</Link></li>
                    <li><Link to="/" className="navigator-list-item side-menu-item">Students</Link></li>
                    <li><Link to="/" className="navigator-list-item side-menu-item">Groups</Link></li>
                    <li><Link to="/" className="navigator-list-item side-menu-item">Courses</Link></li>
                    <li><Link to="/" className="navigator-list-item side-menu-item">Teachers</Link></li>
                </div>
            </div>
           </div>  */}
           {/* <div className="navigator"> */}
           <nav className="navigator">
                <a href="#home" className="navigator-item">Home</a>
                <a href="#students" className="navigator-item">Students</a>
                <a href="#groups" className="navigator-item">Groups</a>
                <a href="#courses" className="navigator-item">Courses</a>
                <a href="#professors" className="navigator-item">Professors</a>
            </nav>
           {/* </div> */}
        </header>
    )
};

export default Header;