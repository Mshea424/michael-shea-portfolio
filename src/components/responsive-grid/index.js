import { useContext } from 'react';
import {LogosContext} from '../../App'
// import {ProjectsContext} from '../../App'
import "./styles.css";

import GridLogo from './grid-logo/index'
// import GridItemLg from './grid-item-lg/index'


// Responsive Grid must be initialized with 'itemsType' prop of either 'logo' or 'project'
// the value of itemsType will specify whether to render a grid of logos, or a grid of Project cards

export default function ResponsiveGrid(props) {

    const logos = useContext(LogosContext);
    // const projects = useContext(ProjectsContext);


    if (props.itemsType === 'logo') {
        console.log(logos)
        return (
            <div className="grid">
                {logos.map((imgUrl)=> {
                    return (<GridLogo imgUrl={imgUrl}/>)
                })}
                
            </div>
        )
    }
    else if (props.itemsType === 'project') { 
        return (
            <div className="grid">
             {/* GridProject Components */}
            </div>
        )
    }

    else {
        console.log(`COMPONENT ERROR: ResposnsiveGrid expects an initial prop of itemsType, with a value of 'logo' or 'project'`)
        return <></>
    }
}
