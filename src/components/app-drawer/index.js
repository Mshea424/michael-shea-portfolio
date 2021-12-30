import React, {useState} from 'react';
import HamburgerButton from './hamburger-button/index';
import DrawerBody from './drawer-body/index';
import "./styles.css";

export default function AppDrawer() {
    const [ drawerActive, setdrawerActive ] = useState(false);
    const toggleDrawerActive = () => setdrawerActive(!drawerActive);
    return (
        <div>
            <div>{drawerActive ? 1 : 0}</div>
            <button onClick={()=> setdrawerActive(!drawerActive)}>toggle state</button>
            <HamburgerButton 
                drawerActive={drawerActive}
                toggleDrawerActive={toggleDrawerActive}
            />
            {/* <DrawerBody drawerActive={drawerActive}/> */}
        </div>
    )
}
