import { useState } from 'react'
import './styles.css'

export default function Header() {

    const [ textCount, setTextCount ] = useState(1)

    return (
        <div className="header-wrapper">
            <div 
                className={`header-text ${textCount === 1 ? 'text-active' : ''}`}
                onAnimationEnd={()=>{setTextCount(textCount + 1)}}
            >
                Hi
            </div>
            <div 
                className={`header-text ${textCount === 2 ? 'text-active' : ''}`}
                onAnimationEnd={()=>{setTextCount(textCount + 1)}}
            >
                I'm Mike
            </div>
            <div
                className={`header-text ${textCount === 3 ? 'text-active' : ''}`}
                onAnimationEnd={()=>{setTextCount(textCount + 1)}}
            >
                Welcome to my Portfolio
            </div>
        </div>
    )
}
