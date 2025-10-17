import React from 'react'
import { Card, CardBody, Col, Form, Label, Row } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import FormateDemo from './FormateDemo';
import { Default } from '../../../../../utils/Constant'
import { RangeSliderData } from '../BasicRange';

const FormateRange = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Formated Label' subTitle={RangeSliderData} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider warning-range">
                        <Row className="mb-0">
                            <FormateDemo />
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FormateRange