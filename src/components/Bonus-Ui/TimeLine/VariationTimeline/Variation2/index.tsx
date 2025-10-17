import React from 'react'
import { AddedBewItems, Quisqueaconsequat, Today } from 'utils/Constant'
import Recentimage from './Recentimage'

const Variation2 = () => {
    return (
        <li className="d-flex">
            <div className="activity-dot-warning" />
            <div className="w-100 ms-3">
                <p className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background">5th Feb, 2023</span>
                    <span>{Today}</span>
                </p>
                <h6>{AddedBewItems}<span className="dot-notification" /></h6>
                <span className="f-light">{Quisqueaconsequat}</span>
                <Recentimage />
            </div>
        </li>
    )
}

export default Variation2