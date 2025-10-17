import React from 'react'
import { Col, Row } from 'reactstrap'
import { Level1col10, Level1col2 } from 'utils/Constant'

const NestingLevel3 = () => {
    return (
        <Col xs={8}>
            <span className="pb-0">
                <Row className="g-2">
                    <Col sm={2} xs={4}>
                        <span className="border border-2">{Level1col2}</span>
                    </Col>
                    <Col sm={10} xs={8}>
                        <span className="border border-2">{Level1col10}</span>
                    </Col>
                </Row>
            </span>
        </Col>
    )
}

export default NestingLevel3