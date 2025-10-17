import { UpcomingOptionsChartData } from 'Data/Dashboard/OnlineCourseData/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody } from 'reactstrap'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const UpcomingEventChart = () => {
    return (
        <CardBody className='pt-0'>
            <div className='upcoming-event-wrap'>
                <ReactApexChart height={305} type='rangeBar' options={UpcomingOptionsChartData.options} series={UpcomingOptionsChartData.series} />
            </div>
        </CardBody>
    )
}

export default UpcomingEventChart