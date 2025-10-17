import React from 'react'
import { BonusUi, Breadcrumb, Home } from '../../../../../../utils/Constant'

const BgInfo = () => {
    return (
        <ol className="breadcrumb breadcrumb-colored m-b-30 bg-info">
            <li className="breadcrumb-item">
                <a className="fw-bold" href="#">{Home}</a>
            </li>
            <li className="breadcrumb-item">
                <a className="fw-bold" href="#">{BonusUi}</a>
            </li>
            <li className="breadcrumb-item active fw-bold">{Breadcrumb}</li>
        </ol>
    )
}

export default BgInfo