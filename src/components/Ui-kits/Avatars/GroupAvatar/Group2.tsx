import React from 'react'
import { ImgPath } from 'utils/Constant'

const Group2 = () => {
    return (
        <div className="customers d-inline-block avatar-group">
            <ul>
                <li className="d-inline-block">
                    <img className="img-60 rounded-circle" src={`${ImgPath}/avtar/16.jpg`} alt="#" />
                </li>
                <li className="d-inline-block">
                    <img className="b-r-8 img-80" src={`${ImgPath}/user/1.jpg`} alt="#" />
                </li>
                <li className="d-inline-block">
                    <img className="img-60 rounded-circle" src={`${ImgPath}/avtar/16.jpg`} alt="#" />
                </li>
            </ul>
        </div>
    )
}

export default Group2