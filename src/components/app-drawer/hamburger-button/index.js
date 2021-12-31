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
                    className={`hamburger-line ${props.drawerActive ? "active line-activate1" : "line-deactivate1"}`}
                    id="line1"
                ></div>
                <div 
                    className={`hamburger-line ${props.drawerActive ? "active line-activate2" : "line-deactivate2"}`}
                    id="line2"
                ></div>
                <div 
                    className={`hamburger-line ${props.drawerActive ? "active line-activate3" : "line-deactivate3"}`}
                    id="line3"
                ></div>
            </div>
            <div 
                className={`button-shadow ${props.drawerActive ? "active shadow-activate" : "shadow-deactivate"}`}
                onClick={()=> props.toggleDrawerActive()}
            >
            
            </div>
        </>
        
    )
}
