import React from 'react'
import { Col, Row } from 'reactstrap'
import { LightCardBoxData } from 'Data/Dashboard/OnlineCourseData'
import LightCardBox from './LightCardBox'

const ActivityLightBox = () => {
    return (
        <Col xl={4} className='p-0'>
            <Row className='g-sm-3 g-2 mt-0'>
                {LightCardBoxData.map((item, i) => (
                    <Col key={i} xl={12} md={6} sm={4}>
                        <LightCardBox data={item} />
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default ActivityLightBox