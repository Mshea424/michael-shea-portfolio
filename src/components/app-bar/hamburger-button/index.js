import React, {useState} from 'react'
import "./styles.css";

export default function HamburgerButton() {
    const [buttonActive, setButtonActive] = useState(false)
    return (
        <div 
            className='hamburger-button'
            onClick={()=> setButtonActive(!buttonActive)}
        >
            <div 
                className={`hamburger-line ${buttonActive ? "active" : ""}`}
                id="line1"
            ></div>
            <div 
                className={`hamburger-line ${buttonActive ? "active" : ""}`}
                id="line2"
            ></div>
            <div 
                className={`hamburger-line ${buttonActive ? "active" : ""}`}
                id="line3"
            ></div>
        </div>
    )
}
