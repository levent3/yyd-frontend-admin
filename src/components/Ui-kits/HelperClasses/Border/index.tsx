import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import AdditiveBorder from './AdditiveBorder'
import SubtractiveBorder from './SubtractiveBorder'
import AdditiveRadius from './AdditiveRadius'

const Border = () => {
    const submenuObj = [
        {
            text: "Use border utilities to add or remove an element's borders.",
        }
    ]
    return (
        <Col xs={12}>
            <Card>
                <CardHead title='Borders And Displays' subTitle={submenuObj} />
                <CardBody>
                    <Row className='g-3'>
                        <AdditiveBorder />
                        <SubtractiveBorder />
                        <AdditiveRadius />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Border