import './index.css'
import '../../grid.css'
import '../../section.css'
import logoUrls from './logoUrls'

export default function Skills() {
    return (
        <>
        <div className="section">
        <div className="section-title" id="skills">
                Technologies
            </div>
            <div className="section-subtitle">
                While my primary disciplines are ReactJs, and NodeJS, I have had the fortune of working on a variety of projects that use different frameworks & technologies. I have listed some of these, below:
            </div>
        <div className="grid-wrapper">
            {logoUrls.map((url)=> {
                return(
                    <div
                    className='grid-tile-md'
                    >
                        <img 
                            className='logo-img'
                            src={url}
                            alt="logo"
                        />
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}
