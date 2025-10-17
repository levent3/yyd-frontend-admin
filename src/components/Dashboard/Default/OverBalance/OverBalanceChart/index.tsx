import { CurrencyChartData } from 'Data/Dashboard/DefaultData/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody, Col, Row } from 'reactstrap'
import { Earning, Expense } from 'utils/Constant'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const OverBalanceChart = () => {
    return (
        <Col xl={9} md={12} sm={7} className='p-0'>
            <div className='chart-right'>
                <Row>
                    <Col xl={12}>
                        <CardBody className='p-0'>
                            <ul className='d-flex balance-data' >
                                <li>
                                    <span className='circle bg-warning'> </span>
                                    <span className='f-light ms-1'>{Earning}</span>
                                </li>
                                <li>
                                    <span className='circle bg-primary'> </span>
                                    <span className='f-light ms-1'>{Expense}</span>
                                </li>
                            </ul>
                            <div className='current-sale-container'>
                                <ReactApexChart type='bar' height={300} options={CurrencyChartData.options} series={CurrencyChartData.series} />
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default OverBalanceChart