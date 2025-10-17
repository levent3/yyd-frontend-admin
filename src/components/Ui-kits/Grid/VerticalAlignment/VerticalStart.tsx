import React from 'react'
import { Col, Row } from 'reactstrap'
import { onecolumn, twocolumn } from 'utils/Constant'

const VerticalStart = () => {
    return (
        <Col lg={4}>
            <Row className="grid-vertical align-items-start m-1 g-2 bg-light">
                <Col xs={6}>
                    <span className="bg-white">{onecolumn}</span>
                </Col>
                <Col xs={6}>
                    <span className="bg-white">{twocolumn}</span>
                </Col>
            </Row>
        </Col>

    )
}

export default VerticalStart