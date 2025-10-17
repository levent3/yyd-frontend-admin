import { offsetBodyData } from 'Data/Ui-kits/GridData'
import React from 'react'
import { Col, Row } from 'reactstrap'

const OffsetBody = () => {
    return (
        <Row className="g-2">
            {
                offsetBodyData && offsetBodyData.map((item, index) => (
                    <Col className={item.class} key={index}>
                        <span>{item.text}</span>
                    </Col>
                ))
            }
        </Row>
    )
}

export default OffsetBody