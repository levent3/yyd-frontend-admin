import React from 'react'
import { Card, Col } from 'reactstrap'
import { Dec09, Min2read, ProfileText } from 'utils/Constant'
import ProfileLike from '../CommonProfile/ProfileLike'
import CommonProfileHead from '../CommonProfile'

const ProfileDetail = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <CommonProfileHead month={Dec09} time={Min2read} activeTime='9 Month ago' /><hr />
                    <p className="block-ellipsis">{ProfileText}</p>
                    <ProfileLike />
                </div>
            </Card >
        </Col >

    )
}

export default ProfileDetail