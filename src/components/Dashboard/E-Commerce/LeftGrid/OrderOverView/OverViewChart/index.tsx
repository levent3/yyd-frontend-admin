import { OptionsOverView, OptionsOverViewBarChart } from 'Data/Dashboard/E-commerceData/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody, Col, Row } from 'reactstrap'
import OrderViewList from './OrderViewList'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const OverViewChart = () => {
    return (
        <Col xl={9} md={8} sm={7} className='box-col-7 p-0'>
            <div className='chart-right'>
                <Row>
                    <Col xl={12}>
                        <CardBody className='p-0'>
                            <OrderViewList />
                            <div className='current-sale-container order-container'>
                                <ReactApexChart className='overview-wrapper' type='line' height={300} options={OptionsOverView.options} series={OptionsOverView.series} />
                                <div className='back-bar-container'>
                                    <ReactApexChart type='bar' height={180} options={OptionsOverViewBarChart.options} series={OptionsOverViewBarChart.series} />
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default OverViewChart