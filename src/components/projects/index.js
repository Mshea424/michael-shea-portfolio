import './styles.css'
import '../../section.css';
import '../../grid.css';

export default function Projects() {
    return (
        <div className="section">
            <div className="section-title" id="projects">My Projects</div>
            <div className="grid-wrapper">
                <a 
                    href="https://www.qbcart.net/" 
                    className="project-wrapper"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <div 
                        className="project-img"
                        style={ { backgroundImage: 'url(images/qbcart_logo.jpeg)'} }
                    >
                    
                    </div>
                    <div className="project-desc">
                        <div className="project-title">QBCart</div>
                        <div className=" project-subtitle truncate-overflow">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                        </div> 
                    </div>
                </a>
                <div className="project-wrapper reversed">
                    <div className="project-img">
                    
                    </div>
                    <div className="project-desc">
                    <div className="project-title">Americonnect</div>
                        <div className=" project-subtitle truncate-overflow">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
