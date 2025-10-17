import React from 'react'
import { Col, Row } from 'reactstrap'
import { Onecolumn, Twocolumn } from 'utils/Constant'

const HorizontalStart = () => {
    return (
        <Row className="justify-content-start bg-light">
            <Col xs={5}>
                <span className="bg-white text-dark">{Onecolumn}</span>
            </Col>
            <Col xs={5}>
                <span className="bg-white text-dark">{Twocolumn}</span>
            </Col>
        </Row>
    )
}

export default HorizontalStart