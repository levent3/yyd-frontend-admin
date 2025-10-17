import Widgets2 from 'CommonElements/Widgets2'
import { Widgets2Data, Widgets2Data2 } from 'Data/Dashboard/DefaultData'
import React from 'react'
import { Col, Row } from 'reactstrap'

const OrderProfit = () => {
    return (
        <Col xxl='auto' xl={12} sm={6} className='box-col-6'>
            <Row>
                <Col xxl={12} xl={6} className='box-col-12'>
                    <Widgets2 data={Widgets2Data} />
                </Col>
                <Col xxl={12} xl={6} className='box-col-12'>
                    <Widgets2 chartClass='profit-chart ' data={Widgets2Data2} />
                </Col>
            </Row>
        </Col>
    )
}

export default OrderProfit