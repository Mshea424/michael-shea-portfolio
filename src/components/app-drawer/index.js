import React from 'react';
import HamburgerButton from './hamburger-button/index';
import DrawerBody from './drawer-body/index';
import "./styles.css";

export default function AppDrawer() {
    return (
        <div>
            <HamburgerButton/>
            <DrawerBody/>
        </div>
    )
}
