import './index.css'
import '../../grid.css'
import logoUrls from '../../logoUrls'

export default function Skills() {
    return (
        <div className="grid">
            {logoUrls.map((url)=> {
                return(
                    <div
                    className='logo-wrapper'
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
