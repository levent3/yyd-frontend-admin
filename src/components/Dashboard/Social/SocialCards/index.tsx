import { SmallWidgetsData, SocialWidgetData } from 'Data/Dashboard/Social'
import React from 'react'
import { Col, Row } from 'reactstrap'
import SocialWidget from './SocialWidget'
import InstagramSubscription from './InstagramSubscription'
import SmallWidgets from './SmallWidgets'

const SocialCards = () => {
    return (
        <Col xxl={6} xl={8} className='col-ed-8 box-col-8e'>
            <Row>
                {SocialWidgetData.map((item, i) => (
                    <Col md={4} sm={item.sm && item.sm} key={i}>
                        <SocialWidget data={item} />
                    </Col>
                ))}
                <Col md={8}>
                    <InstagramSubscription />
                </Col>
                <Col md={4}>
                    <Row>
                        {SmallWidgetsData.map((item, i) => (
                            <Col md={12} sm={6} key={i}>
                                <SmallWidgets data={item} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default SocialCards