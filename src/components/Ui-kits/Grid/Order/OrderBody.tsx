import { gridorderBodyData } from 'Data/Ui-kits/GridData'
import React from 'react'
import { Col, Row } from 'reactstrap'

const OrderBody = () => {
    return (
        <Row className="g-2">
            {
                gridorderBodyData && gridorderBodyData.map((item, index) => (
                    <Col className={item.class} key={index}>
                        <span>{item.text}</span>
                    </Col>
                ))
            }
        </Row>
    )
}

export default OrderBody