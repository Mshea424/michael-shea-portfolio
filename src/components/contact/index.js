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
                style={ { backgroundImage: 'url(images/linkedin_link.png)'} }
            ></a>
            <a 
                className="contact-link"
                href="https://github.com/mshea424"
                target="_blank" 
                rel="noopener noreferrer"
                style={ { backgroundImage: 'url(images/github_link.png)'} }
            ></a>
        </div>
    )
}
