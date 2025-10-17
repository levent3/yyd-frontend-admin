import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'

const CustomModals = () => {
    const submenuObj = [
        {
            text: "Custom Modal make by cuba.",
        }
    ]
    return (
        <Col xs={12}>
            <Card>
                <CardHead title='Cuba Custom Modals' subTitle={submenuObj} />
                <CardBody>
                    <Row className='g-3'>
                        <Modal1 />
                        <Modal2 />
                        <Modal3 />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CustomModals