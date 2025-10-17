import React from 'react'
import { UpdatedProduct, Updatetext } from 'utils/Constant'

const Variation1 = () => {
    return (
        <li className="d-flex">
            <div className="activity-dot-primary" />
            <div className="w-100 ms-3">
                <p className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background">8th March, 2022</span>
                    <span>1 day ago</span>
                </p>
                <h6>{UpdatedProduct}<span className="dot-notification" /></h6>
                <p className="f-light">{Updatetext}</p>
            </div>
        </li>
    )
}

export default Variation1