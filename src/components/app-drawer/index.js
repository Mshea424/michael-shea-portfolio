import {useState} from 'react';
import HamburgerButton from './hamburger-button/index';
import DrawerBody from './drawer-body/index';
import "./styles.css";

export default function AppDrawer() {
    const [ drawerActive, setdrawerActive ] = useState(false);
    const toggleDrawerActive = () => setdrawerActive(!drawerActive);
    return (
        <div>
            <HamburgerButton 
                drawerActive={drawerActive}
                toggleDrawerActive={toggleDrawerActive}
            />
            <DrawerBody drawerActive={drawerActive}/>
        </div>
    )
}
