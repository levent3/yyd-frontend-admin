import React from 'react'
import { Quisqueconsequat, Tellojust } from 'utils/Constant'

const Variation3 = () => {
    return (
        <li className="d-flex pb-0">
            <div className="activity-dot-secondary" />
            <div className="w-100 ms-3">
                <p className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background">20th Sep, 2022</span>
                    <span>12:00 PM</span>
                </p>
                <h6>{Tellojust}<span className="dot-notification" /></h6>
                <p>{Quisqueconsequat}</p>
            </div>
        </li>
    )
}

export default Variation3