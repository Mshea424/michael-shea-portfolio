import "./styles.css";

export default function DrawerBody(props) {
    return (
        <div 
            className={`drawer-body ${props.drawerActive ? "active drawer-activate" : "drawer-deactivate"}`}
        >
            <div>
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
            <div>
            <a 
                className="drawer-nav social"
                href="https://www.linkedin.com/in/michael-s-shea/"
                target="_blank" 
                rel="noopener noreferrer"
                style={ { backgroundImage: 'url(images/linkedin_link_white.png)'} }
            >Visit LinkedIn Profile</a>
            <a 
                className="drawer-nav social"
                href="https://github.com/mshea424"
                target="_blank" 
                rel="noopener noreferrer"
                style={ { backgroundImage: 'url(images/github_link_white.png)'} }
            >Visit GitHub Profile</a>
            <a 
                className="drawer-nav"
                href="/michael-shea-resume.pdf" 
                download="michael-shea-resume"
            >
                Download Resume
                <span className="material-icons">
                    file_download
                </span>
            </a>    
            </div>
            
        </div>
    )
}
