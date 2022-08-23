import './ButtonStyle.css';

import React from "react";

interface Props {
    text:string;
    style: React.CSSProperties
}

const Button = (props:Props) =>{
    return(
        <button style={props.style} className="actionButton">
            {props.text}
        </button>
    )
};

export default Button;
