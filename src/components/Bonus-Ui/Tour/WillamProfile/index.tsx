import React from 'react'
import { Card, Col } from 'reactstrap'
import { Jan25, Minread6, ProfileHead2, ProfileHead2Text, ProfileText2, min3ago } from 'utils/Constant'
import Image from 'next/image'
import ProfileLike from '../CommonProfile/ProfileLike'
import Link from 'next/link'
import profileImg from '../../../../../public/assets/images/other-images/profile-style-img3.png'
import CommonProfileHead from '../CommonProfile'

const WilliamProfile = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style step5">
                    <CommonProfileHead month={Jan25} time={Minread6} activeTime={min3ago} /><hr />
                    <h5 className="pb-3">{ProfileHead2}</h5>
                    <p className="block-ellipsis">{ProfileHead2Text}</p>
                    <div className="img-container">
                        <Link href="/ui-kits/tour">
                            <Image className="img-fluid rounded" src={profileImg} alt="gallery" />
                        </Link>
                        <p className="block-ellipsis pt-3">{ProfileText2}</p>
                    </div>
                    <ProfileLike />
                </div>
            </Card >
        </Col >

    )
}

export default WilliamProfile