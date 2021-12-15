import React from 'react'
import '../styles/TableRoi_style.scss'

export const TableRoi = () => {
    return (
        <div className="grid-container-tableroi">
            <div className="item1">Win</div>
            <div className="item2">Loss</div>
            <div className="item3">avg</div>  
            <div className="item4">trade</div>
            <div className="item5">roi</div>
        </div>
    )
}
