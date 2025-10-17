import React from 'react'
import { Card, CardBody, Col, Form, Label, Row } from 'reactstrap';
import CardHead from '../../../../../CommonElements/CardHead';
import { Default } from '../../../../../utils/Constant';
import DraggableDemo from './DraggableDemo';
import { RangeSliderData } from '../BasicRange';

const Draggable = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Draggable Range' subTitle={RangeSliderData} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider danger-range">
                        <Row className="mb-0">
                            <DraggableDemo />
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Draggable