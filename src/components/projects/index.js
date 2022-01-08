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
                    QBCart
                    </div>
                </a>
                <div className="project-wrapper">
                    <div className="project-img">
                    
                    </div>
                    <div className="project-desc">
                    Americonnect
                    </div>
                </div>
            </div> 
        </div>
    )
}
