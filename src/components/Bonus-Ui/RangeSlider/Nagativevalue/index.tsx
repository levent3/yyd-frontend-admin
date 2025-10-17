import React from 'react'
import { Card, CardBody, Col, Form, Label, Row } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import NagativevalueDemo from './NagativevalueDemo';
import { Default } from 'utils/Constant';
import { RangeSliderData } from '../BasicRange';

const NagativeValue = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Negative Values' subTitle={RangeSliderData} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider secondary-range">
                        <Row className="mb-0">
                            <NagativevalueDemo />
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default NagativeValue