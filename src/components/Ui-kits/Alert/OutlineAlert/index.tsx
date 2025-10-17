import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import LightOutline from './LightOutline'
import DarkOutline from './DarkOutline'

const OutlineAlert = () => {
    const submenuObj = [
        {
            text: "Use the ",
            code: '.border-*'
        },
        {
            text: 'utility class to quickly provide matching border and border-width within any alert.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Outline Dark And Light Alerts' subTitle={submenuObj} />
                <CardBody>
                    <LightOutline />
                    <DarkOutline />
                </CardBody>
            </Card >
        </Col >
    )
}

export default OutlineAlert