import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CustomBorder from './CustomBorder'
import BorderColor from './BorderColor'
import BorderWidth from './BorderWidth'
import TextColor from './TextColor'

const BorderStyle = () => {
    const submenuObj = [
        {
            text: "Use the different styles of borders like:",
            code: 'border radius/border-color/border-width'
        },
        {
            text: '. Use of any components.'
        }
    ]
    return (
        <Col xs={12}>
            <Card>
                <CardHead title='Styles In Borders' subTitle={submenuObj} />
                <CardBody>
                    <Row className='g-3'>
                        <CustomBorder />
                        <BorderColor />
                        <BorderWidth />
                        <TextColor />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderStyle