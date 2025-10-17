import Widgets1 from 'CommonElements/Widgets1'
import { WidgetsData2, WidgetsData4 } from 'Data/Dashboard/DefaultData'
import React from 'react'
import { Col, Row } from 'reactstrap'

const GoodsReturn = () => {
    return (
        <Col xxl={'auto'} xl={3} sm={6} className='box-col-6'>
            <Row>
                <Col xl={12}>
                    <Widgets1 data={WidgetsData2} />
                </Col>
                <Col xl={12}>
                    <Widgets1 data={WidgetsData4} />
                </Col>
            </Row>
        </Col>
    )
}

export default GoodsReturn