import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CardHead from '../../../../CommonElements/CardHead'
import { weatherIconData } from '../../../../Data/Icons/WeatherIconList'

const WeatherCommon = () => {
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Whether Icons With Animations' subTitle={[]} />
                <CardBody>
                    <Row className='icon-lists whether-icon'>
                        {
                            weatherIconData && weatherIconData.map((item, index) => (
                                <Col lg={2} xs={3} key={index}>
                                    {item.icon}
                                </Col>
                            ))
                        }
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default WeatherCommon