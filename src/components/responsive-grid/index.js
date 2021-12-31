import React from 'react';
import "./styles.css";

import GridItem from './grid-item/index'

export default function ResponsiveGrid() {
    return (
        <div className="grid">
            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem/>
        </div>
    )
}
