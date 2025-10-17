import React from 'react'
import { Col, Row } from 'reactstrap'
import Widgets1 from '../../../../../../CommonElements/Widgets1'
import { WidgetsData, WidgetsData3 } from '../../../../../../Data/Dashboard/DefaultData'

const SalePurchase = () => {
    return (
        <Col xxl='auto' xl={3} sm={6} className='box-col-6'>
            <Row>
                <Col xl={12}>
                    <Widgets1 data={WidgetsData} />
                </Col>
                <Col xl={12}>
                    <Widgets1 data={WidgetsData3} />
                </Col>
            </Row>
        </Col>
    ) 
}

export default SalePurchase