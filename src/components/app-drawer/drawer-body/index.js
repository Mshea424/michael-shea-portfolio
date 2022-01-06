import "./styles.css";

export default function DrawerBody(props) {
    return (
        <div 
            className={`drawer-body ${props.drawerActive ? "active drawer-activate" : "drawer-deactivate"}`}
        >
            <a 
                href="#about" 
                className='drawer-nav'
                onClick={()=> props.toggleDrawerActive()}
            >
                About Me
            </a>
            <a 
                href="#skills" 
                className='drawer-nav'
                onClick={()=> props.toggleDrawerActive()}
            >
                Technologies
            </a>
            <a 
                href="#projects" 
                className='drawer-nav'
                onClick={()=> props.toggleDrawerActive()}
            >
                Projects
            </a>
            <a 
                href="#contact" 
                className='drawer-nav'
                onClick={()=> props.toggleDrawerActive()}
            >
                Contact
            </a>
        </div>
    )
}
