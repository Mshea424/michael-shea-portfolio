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
                         QBCart is a business software suite that extends Quick Books with a variety of additional features. 
                         My role was to build the front-end web experience to allow QBCArt customers to easily launch Ecommerce sites and integrate them directly with QuickBooks.
                        </div> 
                    </div>
                </a>
                <div className="project-wrapper reversed">
                    <div className="project-img">
                    
                    </div>
                    <div className="project-desc">
                    <div className="project-title">Americonnect</div>
                        <div className=" project-subtitle truncate-overflow">
                            Ammericonnect is a Trucking company based in Canada. 
                            I built a new modern responsive website for Americonnect, including a quote tool that allowed them to drive business from internet traffic. As of this writing, the company has not yet taken the site live.
                        </div>
                    </div>
                </div>
                <div className="project-wrapper">
                    <div className="project-img">
                    
                    </div>
                    <div className="project-desc">
                    <div className="project-title">Clarity</div>
                        <div className=" project-subtitle truncate-overflow">
                            Clarity is an application built in Angular which allows a commercial insurance broker to produce attractive visualizations of complex corporate insurance strategies. 
                            I was primarily responsible for the UI.
                        </div>
                    </div>
                </div>
                <div className="project-wrapper reversed">
                    <div className="project-img">
                    
                    </div>
                    <div className="project-desc">
                    <div className="project-title">Sunset Yards</div>
                        <div className=" project-subtitle truncate-overflow">
                            Sunset Yards is a High-end Commercial Real estate project in New York City. 
                            I built Sunset Yard's new website, along with another developer, coded completely in Vanilla JS, CSS, and HTML.
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
