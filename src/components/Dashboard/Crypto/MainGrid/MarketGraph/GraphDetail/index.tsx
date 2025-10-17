import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody, Col, Row } from 'reactstrap'
import GraphCard from './GraphCard'
import { MarketGraphOption } from 'Data/Dashboard/CryptoData/Chart'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const GraphDetail = () => {
    return (
        <CardBody className='pt-0'>
            <Row className='m-0 overall-card'>
                <Col xxl={8} xl={7} md={8} sm={7} className='p-0 box-col-7 col-ed-7'>
                    <div className='market-chart-container'>
                        <ReactApexChart type='line' height={300} options={MarketGraphOption.options} series={MarketGraphOption.series} />
                    </div>
                </Col>
                <GraphCard />
            </Row>
        </CardBody>
    )
}

export default GraphDetail