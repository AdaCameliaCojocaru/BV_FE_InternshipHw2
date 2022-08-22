import "./WelcomeStyle.css";

import Catalog from "../image/catalog.png";
import React from "react";

const Welcome = () => {
    return(
        <div className="container">
            <p className="welcomeMessage">Welcome to the  student management app!</p>
            <img src={Catalog} alt="Catalog" className="catalog" />
        </div>
        
    )
};

export default Welcome;