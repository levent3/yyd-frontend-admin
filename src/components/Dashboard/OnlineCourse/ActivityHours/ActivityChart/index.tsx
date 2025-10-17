import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody, Col, Row } from 'reactstrap'
import { ActivityHoursChartData } from '../../../../../../Data/Dashboard/OnlineCourseData/Chart'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ActivityChart = () => {
    return (
        <Col xl={8}>
            <div className='chart-right'>
                <Row>
                    <Col xl={12}>
                        <CardBody className='p-0'>
                            <div className='activity-wrap'>
                                <ReactApexChart type='bar' height={300} options={ActivityHoursChartData.options} series={ActivityHoursChartData.series} />
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default ActivityChart