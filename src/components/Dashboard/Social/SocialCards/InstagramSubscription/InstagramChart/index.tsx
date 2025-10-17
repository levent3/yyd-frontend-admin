import { InstagramSubscriptionChart } from 'Data/Dashboard/Social/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody } from 'reactstrap'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const InstagramChart = () => {
    return (
        <CardBody className='pt-0'>
            <div className='subscriber-chart-container'>
                <ReactApexChart height={265} type='line' options={InstagramSubscriptionChart.options} series={InstagramSubscriptionChart.series} />
            </div>
        </CardBody>
    )
}

export default InstagramChart