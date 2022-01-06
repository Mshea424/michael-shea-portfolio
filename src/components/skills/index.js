import './index.css'
import '../../grid.css'
import logoUrls from './logoUrls'

export default function Skills() {
    return (
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
    )
}
