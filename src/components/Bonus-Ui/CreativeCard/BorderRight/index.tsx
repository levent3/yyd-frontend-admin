import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Form, Input, Label } from 'reactstrap'
import { BorderRightText, Emailaddress } from 'utils/Constant'

const BorderRight = () => {
    const subMenu = [
        {
            text: 'Use the class of',
            code: '.b-r-* '
        },
        {
            text: 'for right border.'
        }
    ]
    return (
        <Col md={6} xs={12}>
            <Card>
                <CardHead title='Border Right' subTitle={subMenu} headClass='border-r-secondary' />
                <CardBody>
                    <p>{BorderRightText}</p>
                    <Form>
                        <Label className="form-label" htmlFor="exampleFormControlInput1">{Emailaddress}</Label>
                        <Input className="form-control" id="exampleFormControlInput1" type="email" placeholder="youremail@gmail.com" />
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderRight