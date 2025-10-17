import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Display } from 'utils/Constant'
import CardHeaderDisplay from './CardHeaderDisplay'

const DisplayHeading = () => {
    return (
        <Col xs={12}>
            <Card>
                <CardHeaderDisplay />
                <CardBody className='d-flex flex-column gap-2'>
                    <h1 className="display-1">{Display} 1</h1>
                    <h1 className="display-2">{Display} 2</h1>
                    <h1 className="display-3">{Display} 3</h1>
                    <h1 className="display-4">{Display} 4</h1>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DisplayHeading