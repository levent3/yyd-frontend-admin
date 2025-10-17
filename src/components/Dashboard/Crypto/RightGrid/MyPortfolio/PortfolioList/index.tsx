import { myPortfolioChartOption } from 'Data/Dashboard/CryptoData/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { Col, Row } from 'reactstrap'
import PortfolioTable from './PortfolioTable'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const PortfolioList = () => {
    return (
        <Row>
            <Col xxl={12} xl={7} sm={6} className='box-col-6'>
                <div className='portfolio-chart-container'>
                    <ReactApexChart type='radialBar' height={280} options={myPortfolioChartOption.options} series={myPortfolioChartOption.series} />
                </div>
            </Col>
            <Col xxl={12} xl={5} sm={6} className='box-col-6'>
                <div className='portfolio-table recent-table table-responsive'>
                    <PortfolioTable />
                </div>
            </Col>
        </Row>
    )
}

export default PortfolioList