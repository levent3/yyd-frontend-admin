import React from 'react'
import { ImgPath } from 'utils/Constant'

const Group1 = () => {
    return (
        <div className="customers d-inline-block avatar-group">
            <ul>
                <li className="d-inline-block">
                    <img className="img-100 b-r-8" src={`${ImgPath}/avtar/4.jpg`} alt="#" />
                </li>
                <li className="d-inline-block">
                    <img className="img-80 b-r-30" src={`${ImgPath}/avtar/16.jpg`} alt="#" />
                </li>
                <li className="d-inline-block">
                    <img className="img-50 b-r-35" src={`${ImgPath}/avtar/3.jpg`} alt="#" />
                </li>
            </ul>
        </div>
    )
}

export default Group1