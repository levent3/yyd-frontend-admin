import SvgIcon from 'CommonElements/Icons/SvgIcon'
import Image from 'next/image'
import React from 'react'
import { ImgPath } from 'utils/Constant'

const BgImage = () => {
    return (
        <div className="social-img-wrap">
            <div className="social-img">
                <Image src={`${ImgPath}/dashboard-5/profile.png`} alt="profile" width={68} height={68} />
            </div>
            <div className="edit-icon">
                <SvgIcon iconId='profile-check' />
            </div>
        </div>
    )
}

export default BgImage