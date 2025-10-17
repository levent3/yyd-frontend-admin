import React from 'react'
import { Col, Row } from 'reactstrap'
import { Onecolumn, Twocolumn } from 'utils/Constant'

const HorizontalEnd = () => {
    return (
        <Row className="justify-content-end bg-light">
            <Col xs={5}>
                <span className="bg-white text-dark">{Onecolumn}</span>
            </Col>
            <Col xs={5}>
                <span className="bg-white text-dark">{Twocolumn}</span>
            </Col>
        </Row>
    )
}

export default HorizontalEnd