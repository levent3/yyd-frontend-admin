import React from 'react'
import { Flag_icon, Home, Icons } from '../../../../../../utils/Constant'

const BgWarning = () => {
    return (
        <ol className="breadcrumb breadcrumb-colored m-b-30 bg-warning">
            <li className="breadcrumb-item">
                <a className="fw-bold" href="#">{Home}</a>
            </li>
            <li className="breadcrumb-item">
                <a className="fw-bold" href="#">{Icons}</a>
            </li>
            <li className="breadcrumb-item active fw-bold">{Flag_icon}</li>
        </ol>
    )
}

export default BgWarning