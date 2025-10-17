import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody } from 'reactstrap'
import { TimeLineChartData } from '../../../../../../Data/Dashboard/DefaultData/Chart'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const TimeLineChart = () => {
    return (
        <CardBody className='pt-0'>
            <div className='schedule-container'>
                <ReactApexChart height={355} type='rangeBar' options={TimeLineChartData.options} series={TimeLineChartData.series} />
            </div>
        </CardBody>
    )
}

export default TimeLineChart