import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { BasicCardText } from '../../../../../utils/Constant'

const DefaultBasic = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Basic Card' subTitle={[{ text: 'This is a simple basic card using anywhere.' }]} />
                <CardBody>
                    <p className="mb-0">{BasicCardText}</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DefaultBasic