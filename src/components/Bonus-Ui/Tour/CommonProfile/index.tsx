import Image from 'next/image'
import React from 'react'
import { Col, Media, Row } from 'reactstrap'
import UserImg from 'public/assets/images/user/7.jpg'
import { WilliamJennings } from 'utils/Constant'
import SocialIcon from './SocialIcon'

type propstype = {
    month: string;
    time: string;
    activeTime: string
}

const CommonProfileHead = ({ month, time, activeTime }: propstype) => {
    return (
        <Row className="g-2 align-items-center">
            <Col sm={8}>
                <Media>
                    <Image className="img-thumbnail rounded-circle me-3" src={UserImg} alt="Generic placeholder image" />
                    <Media body className="align-self-center">
                        <h5 className="mt-0 user-name">{WilliamJennings}</h5>

                    </Media>
                </Media>
            </Col>
            <Col sm={4} className="text-end">
                <small>{activeTime}</small>
            </Col>
        </Row>

    )
}

export default CommonProfileHead