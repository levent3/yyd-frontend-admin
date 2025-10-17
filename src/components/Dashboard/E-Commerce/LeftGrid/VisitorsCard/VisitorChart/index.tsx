//@ts-nocheck
import { OptionsVisitorChart } from 'Data/Dashboard/E-commerceData/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { CardBody } from 'reactstrap'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const VisitorChart = () => {
    return (
        <CardBody className='pt-0'>
            <div className='visitors-container'>
                <ReactApexChart height={270} type='bar' options={OptionsVisitorChart.options} series={OptionsVisitorChart.series} />
            </div>
        </CardBody>
    )
}

export default VisitorChart