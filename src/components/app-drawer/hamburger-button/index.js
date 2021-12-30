import React from 'react'
import "./styles.css";

export default function HamburgerButton(props) {
    return (
        <>                                      
            <div 
                className='hamburger-button'
                onClick={()=> props.toggleDrawerActive()}
            >
                <div 
                    className={`hamburger-line ${props.drawerActive ? "active" : ""}`}
                    id="line1"
                ></div>
                <div 
                    className={`hamburger-line ${props.drawerActive ? "active" : ""}`}
                    id="line2"
                ></div>
                <div 
                    className={`hamburger-line ${props.drawerActive ? "active" : ""}`}
                    id="line3"
                ></div>
            </div>
            <div 
                className={`button-shadow ${props.drawerActive ? "shadow-expand" : ""}`}
                onClick={()=> props.toggleDrawerActive()}
            >
            
            </div>
        </>
        
    )
}
