import React from 'react';
import "./styles.css";

export default function GridLogo(props) {
    return (
        <div className="logo-wrapper">
            <img 
                className='logo-img' 
                src={props.imgUrl} alt="logo"
            />
        </div>
    )
}
