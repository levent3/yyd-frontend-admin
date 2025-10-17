import { FollowerGenderChart } from 'Data/Dashboard/Social/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody } from 'reactstrap'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const FollowerChart = () => {
    return (
        <CardBody className='pt-0'>
            <div className='follower-chart'>
                <ReactApexChart width={325} height={325} type='radialBar' series={FollowerGenderChart.series} options={FollowerGenderChart.options} />
            </div>
        </CardBody>
    )
}

export default FollowerChart