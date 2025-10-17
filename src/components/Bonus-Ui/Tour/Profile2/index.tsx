import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Jan25, Profile2Text, hours10ago, min1read } from 'utils/Constant'
import ProfileLike from '../CommonProfile/ProfileLike'
import Image from 'next/image'
import MountainImg from 'public/assets/images/other-images/mountain.jpg';
import SeaImg from 'public/assets/images/other-images/sea.jpg'
import CommonProfileHead from '../CommonProfile'

const Profile2 = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <CommonProfileHead month={Jan25} time={min1read} activeTime={hours10ago} /><hr />
                    <p className="block-ellipsis">{Profile2Text}</p>
                    <Row className="g-3 mt-4 pictures">
                        <Col sm={6}>
                            <div className="tour-blog">
                                <Image className="img-fluid rounded" src={MountainImg} alt="mountain" />
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="tour-blog">
                                <Image className="img-fluid rounded" src={SeaImg} alt="sea" />
                            </div>
                        </Col>
                    </Row>
                    <ProfileLike />
                </div>
            </Card >
        </Col >

    )
}

export default Profile2