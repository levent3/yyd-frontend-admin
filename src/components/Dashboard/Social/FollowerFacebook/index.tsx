import React from 'react'
import { Col, Row } from 'reactstrap'
import FollowerGender from './FollowerGender'
import FacebookCampaign from './FacebookCapaign'

const FollowerFacebook = () => {
    return (
        <Col xl={3} className='col-ed-none d-xxl-block d-lg-none box-col-none'>
            <Row>
                <Col lg={12} sm={6}>
                    <FollowerGender />
                </Col>
                <Col lg={12} sm={6}>
                    <FacebookCampaign />
                </Col>
            </Row>
        </Col>
    )
}

export default FollowerFacebook