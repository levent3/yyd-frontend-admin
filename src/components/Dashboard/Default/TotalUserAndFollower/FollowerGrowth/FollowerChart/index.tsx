import { GrowthChartData } from 'Data/Dashboard/DefaultData/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody } from 'reactstrap'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const FollowerChart = () => {
    return (
        <CardBody className='pt-0'>
            <div className='growth-wrapper'>
                <ReactApexChart height={200} type='line' options={GrowthChartData.options} series={GrowthChartData.series} />
            </div>
        </CardBody>
    )
}

export default FollowerChart