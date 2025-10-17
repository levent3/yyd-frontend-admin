import React from 'react'
import { Col, Row } from 'reactstrap'
import SocialProfileCard from './SocialProfileCard'
import MobileAppCard from './MobileAppCard'

const ProfileAndMobile = () => {
    return (
        <Col xxl={3} xl={4} className='col-ed-4 box-col-4'>
            <Row>
                <Col xl={12} md={6}>
                    <SocialProfileCard />
                </Col>
                <Col xl={12} md={6}>
                    <MobileAppCard />
                </Col>
            </Row>
        </Col>
    )
}

export default ProfileAndMobile