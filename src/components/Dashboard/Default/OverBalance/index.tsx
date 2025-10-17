import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import OverBalanceChart from './OverBalanceChart'
import { OverallBalanceTitle } from 'utils/Constant'
import LightCard from '../LightCard'
import { LightCardData } from 'Data/Dashboard/DefaultData'

const OverBalance = () => {
    return (
        <Col xxl={8} lg={12} className='box-col-12'>
            <Card>
                <CardHeader className='card-no-border'>
                    <h5>{OverallBalanceTitle}</h5>
                </CardHeader>
                <CardBody className='pt-0'>
                    <Row className='m-0 overall-card'>
                        <OverBalanceChart />
                        <LightCard LightCardData={LightCardData} />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default OverBalance