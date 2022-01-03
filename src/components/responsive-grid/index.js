import React from 'react';
import "./styles.css";

import GridLogo from './grid-logo/index'
// import GridItemLg from './grid-item-lg/index'


// Responsive Grid must be initialized with props
// Expected Props structure is: { itemsType: 'logo | project', logoUrls:['./images/css.png', ...] | [{projectDesc: '', projectImgUrl: '', projectNavUrl: ''}, ...]}
export default function ResponsiveGrid(props) {
    if (props.itemsType === 'logo') {
        return (
            <div className="grid">
                {props.logoUrls.map((imgUrl)=> {
                    return (<GridLogo imgUrl={imgUrl}/>)
                })}
                
            </div>
        )
    }
    else if (props.itemsType === 'project') { 
        return (
            <div className="grid">
                {/* <GridItemLg/>
                <GridItemLg/>
                <GridItemLg/>
                <GridItemLg/>
                <GridItemLg/>               */}
            </div>
        )
    }

    else {
        console.log(`COMPONENT ERROR: ResposnsiveGrid expects an initial prop of itemsType, with a value of 'logo' or 'project'`)
        return <></>
    }
}
