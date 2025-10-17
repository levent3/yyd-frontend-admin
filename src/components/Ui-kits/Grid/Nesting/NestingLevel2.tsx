import React from 'react'
import { Col, Row } from 'reactstrap'
import { Level2col5, Level2col7 } from 'utils/Constant'

const NestingLevel2 = () => {
    return (
        <Col xs={9}>
            <span className="pb-0">
                <Row className="g-2">
                    <Col xs={5}>
                        <span className="border border-2">{Level2col5}</span>
                    </Col>
                    <Col xs={7}>
                        <span className="border border-2">{Level2col7}</span>
                    </Col>
                </Row>
            </span>
        </Col>
    )
}

export default NestingLevel2