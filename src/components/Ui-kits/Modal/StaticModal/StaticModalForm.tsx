import React from 'react'
import { Button, Col, Form, Input, Row } from 'reactstrap'
import { Checkmeout, Email, Password, Signin } from 'utils/Constant'

type propsType = {
    toggle: () => void
}

const StaticModalForm = ({ toggle }: propsType) => {
    return (
        <Form>
            <Row className="g-3">
                <Col md={12}>
                    <label className='form-label' htmlFor="inputEmail4">{Email}</label>
                    <Input className="form-control" id="inputEmail4" type="email" placeholder="Enter Your Email" />
                </Col>
                <Col md={12}>
                    <label className="form-label" htmlFor="inputPassword4">{Password}</label>
                    <Input className="form-control" id="inputPassword4" type="password" placeholder="Enter Your Password" />
                </Col>
                <Col md={12}>
                    <div className="form-check">
                        <Input className="form-check-input" id="gridCheck" type="checkbox" />
                        <label className="form-check-label" htmlFor="gridCheck">{Checkmeout}</label>
                    </div>
                </Col>
                <Col md={12}>
                    <Button color='primary' type="submit" onClick={() => { toggle() }}>{Signin}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default StaticModalForm