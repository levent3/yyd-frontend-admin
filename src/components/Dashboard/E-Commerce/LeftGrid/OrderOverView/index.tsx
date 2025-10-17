import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { OrderOverviewTitle } from 'utils/Constant'
import OverViewChart from './OverViewChart'
import { LightCardData2 } from 'Data/Dashboard/DefaultData'
import LightCardBox from '@/components/Dashboard/Default/LightCard/LightCardBox'

const OrderOverView = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <h5>{OrderOverviewTitle}</h5>
            </CardHeader>
            <CardBody className='pt-0'>
                <Row className='m-0 overall-card'>
                    <OverViewChart />
                    <Col xl={3} md={4} sm={5} className='box-col-5 p-0'>
                        <Row className='g-sm-3 g-2'>
                            {
                                LightCardData2.map((data, i) => (
                                    <Col key={i} md={12}>
                                        <LightCardBox data={data} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default OrderOverView