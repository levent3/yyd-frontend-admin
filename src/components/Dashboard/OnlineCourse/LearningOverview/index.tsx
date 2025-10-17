import React from 'react'
import { Card, CardBody } from 'reactstrap'
import OverViewHead from './OverViewHead'
import dynamic from 'next/dynamic'
import { LearningOverviewChartData } from 'Data/Dashboard/OnlineCourseData/Chart'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Learningoverview = () => {
    return (
        <Card>
            <OverViewHead />
            <CardBody className='pt-0'>
                <div className='learning-wrap'>
                    <ReactApexChart type='line' height={315} options={LearningOverviewChartData.options} series={LearningOverviewChartData.series} />
                </div>
            </CardBody>
        </Card>
    )
}

export default Learningoverview