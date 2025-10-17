import React from 'react'
import { Card, CardBody, Col, Form, Label, Row } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { Default } from '../../../../../utils/Constant'
import LabelDemo from './LabelDemo'
import { RangeSliderData } from '../BasicRange'

const FormateLabel = () => {
    return (
        <Col sm={12} xl={6} >
            <Card>
                <CardHead title='Formated Label' subTitle={RangeSliderData} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider info-range">
                        <Row className="mb-0">
                            <LabelDemo />
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FormateLabel