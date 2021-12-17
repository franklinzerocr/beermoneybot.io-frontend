import React from 'react'
import '../styles/TableRoi_style.scss'

export const TableRoi = () => {
    return (
        <div className="grid-container-tableroi">
            <div className="item1">
                <div className="tableroi-sqare">   WIN  </div>
                <div className="tableroi-center">  20  </div>
                </div>
            <div className="item2">
                <div className="tableroi-sqare">   LOSSES  </div>
                <div className="tableroi-center">  3  </div>    
            </div>
            <div className="item3">
                <div className="tableroi-sqare">   AVG  </div>
                <div className="tableroi-center">  3%  </div>    
            </div>  
            <div className="item4">
                <div className="tableroi-sqare">   TRADES  </div>
                <div className="tableroi-center">  23  </div>    
            </div>
            <div className="item5">
                <div className="tableroi-sqare">   ROI  </div>
                <div className="tableroi-center">  10%  </div>    
            </div>
        </div>
    )
}
