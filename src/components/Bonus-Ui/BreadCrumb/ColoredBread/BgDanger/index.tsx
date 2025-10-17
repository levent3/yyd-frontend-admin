import React from 'react'
import { Gallery, Gallery_grid, Home } from '../../../../../../utils/Constant'

const BgDanger = () => {
    return (
        <ol className="breadcrumb breadcrumb-colored m-0 bg-danger">
            <li className="breadcrumb-item">
                <a className="fw-bold" href="#">{Home}</a>
            </li>
            <li className="breadcrumb-item">
                <a className="fw-bold" href="#">{Gallery}</a>
            </li>
            <li className="breadcrumb-item active fw-bold">{Gallery_grid}</li>
        </ol>
    )
}

export default BgDanger