import { MonthlyProfitsChartData } from 'Data/Dashboard/E-commerceData/Chart'
import dynamic from 'next/dynamic'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { MonthlyProfitsGrowth, MonthlyProfitsTitle } from 'utils/Constant'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const MonthlyProfits = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <h5>{MonthlyProfitsTitle}</h5>
                <span className='f-light f-w-500 f-14'>({MonthlyProfitsGrowth})</span>
            </CardHeader>
            <CardBody className='pt-0'>
                <div className='monthly-profit'>
                    <ReactApexChart type='donut' height={300} series={MonthlyProfitsChartData.series} options={MonthlyProfitsChartData.options} />
                </div>
            </CardBody>
        </Card>
    )
}

export default MonthlyProfits