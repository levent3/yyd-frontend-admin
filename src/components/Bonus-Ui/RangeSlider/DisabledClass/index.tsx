import React from 'react'
import { Card, CardBody, Col, Form, Label, Row } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import DisabledDemo from './DisabledDemo'
import { Default } from 'utils/Constant'
import { RangeSliderData } from '../BasicRange'

const DisabledClass = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Disabled' subTitle={RangeSliderData} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider success-range">
                        <Row className="mb-0">
                            <DisabledDemo />
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DisabledClass