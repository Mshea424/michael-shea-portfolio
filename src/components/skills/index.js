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
