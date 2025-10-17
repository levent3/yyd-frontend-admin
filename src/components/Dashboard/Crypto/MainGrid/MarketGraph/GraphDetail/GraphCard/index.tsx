import { MarketGraphLegend } from 'Data/Dashboard/CryptoData'
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import { SeeAllBalance } from 'utils/Constant'
import LightCard from './LightCard'

const GraphCard = () => {
    return (
        <Col xxl={4} xl={5} md={4} sm={5} className='p-0 box-col-5 col-ed-5'>
            <Row className='g-sm-3 g-2'>
                {MarketGraphLegend.map((item, i) => (
                    <Col key={i} md={12}>
                        <LightCard data={item} />
                    </Col>
                ))}
                <Col md={12}>
                    <Button color='dark' outline={true} className='w-100'>{SeeAllBalance}</Button>
                </Col>
            </Row>
        </Col>
    )
}

export default GraphCard