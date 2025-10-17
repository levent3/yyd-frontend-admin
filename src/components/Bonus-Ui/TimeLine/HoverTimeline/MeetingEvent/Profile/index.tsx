import Image from 'next/image'
import React from 'react'
import { CarolynPin, CarolynSutton, ImgPath, LillianGoodfellow, Lillianpin } from 'utils/Constant'

const Profile = () => {
    return (
        <div className="designer-details">
            <div className="designer-profile">
                <div className="designer-wrap">
                    <Image className="designer-img" src={`${ImgPath}/avtar/4.jpg`} alt="profile" width={50} height={50} />
                    <div className="designer-content">
                        <h6>{LillianGoodfellow}</h6>
                        <p>{Lillianpin}</p>
                    </div>
                </div>
            </div>
            <div className="designer-profile">
                <div className="designer-wrap">
                    <Image className="designer-img" src={`${ImgPath}/avtar/7.jpg`} alt="profile" width={50} height={50} />
                    <div className="designer-content">
                        <h6>{CarolynSutton}</h6>
                        <p>{CarolynPin}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile