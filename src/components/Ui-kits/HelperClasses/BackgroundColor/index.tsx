import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DarkBackground from './DarkBackground'
import LightBackground from './LightBackground'
import ExtendedBackground from './ExtendedBackground'

const BackgroundColor = () => {
    const submenuObj = [
        {
            text: 'Use the ',
            code: '.bg-* '
        },
        {
            text: 'and ',
            code: '.alert-light-*'
        },
        {
            text: 'colors in cuba theme.Use of any components.'
        }
    ]
    return (
        <Col xs={12}>
            <Card>
                <CardHead title='Background Colors' subTitle={submenuObj} />
                <CardBody>
                    <Row className='g-3'>
                        <DarkBackground />
                        <LightBackground />
                        <ExtendedBackground />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BackgroundColor