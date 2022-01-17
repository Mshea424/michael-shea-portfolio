import './styles.css'

export default function Contact() {
    return (
        <div className="section">
            <div className="section-title" id="contact">Contact Me</div>
            <a 
                className="contact-link"
                href="https://www.linkedin.com/in/michael-s-shea/"
                target="_blank" 
                rel="noopener noreferrer"
                style={ { backgroundImage: 'url(images/linkedin_link_white.png)'} }
            >Visit LinkedIn Profile</a>
            <a 
                className="contact-link"
                href="https://github.com/mshea424"
                target="_blank" 
                rel="noopener noreferrer"
                style={ { backgroundImage: 'url(images/github_link_white.png)'} }
            >Visit GitHub Profile</a>
            <a 
                className="contact-resume"
                href="/michael-shea-resume.pdf" 
                download="michael-shea-resume"
            >
                Download Resume
                <span className="material-icons">
                    file_download
                </span>
            </a>    
        </div>
    )
}
