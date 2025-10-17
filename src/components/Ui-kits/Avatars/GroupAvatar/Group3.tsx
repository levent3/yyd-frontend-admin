import React from 'react'
import { ImgPath } from 'utils/Constant'

const Group3 = () => {
    return (
        <div className="customers d-inline-block avatar-group">
            <ul>
                <li className="d-inline-block">
                    <img className="img-40 rounded-circle" src={`${ImgPath}/user/3.jpg`} alt='#' />
                </li>
                <li className="d-inline-block">
                    <img className="img-40 rounded-circle" src={`${ImgPath}/user/5.jpg`} alt='#' />
                </li>
                <li className="d-inline-block">
                    <img className="img-40 rounded-circle" src={`${ImgPath}/user/1.jpg`} alt='#' />
                </li>
            </ul>
        </div>

    )
}

export default Group3