import dynamic from 'next/dynamic'
import React from 'react'
import CountUp from 'react-countup'
import { CardBody } from 'reactstrap'
import { OrderThisMonthChart } from '../../../../../../../Data/Dashboard/E-commerceData/Chart'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const OrderList = () => {
    return (
        <CardBody className='card-body pt-0'>
            <div className='light-card balance-card d-inline-block'>
                <h4 className='m-0'>
                    <CountUp className='me-1' prefix='$' duration={0} separator=',' end={12000} />
                    <CountUp className='f-light f-14' prefix='(' suffix=' To Goal)' duration={0} separator=',' end={15080} />
                </h4>
            </div>
            <div className='order-wrapper'>
                <ReactApexChart type='line' height={235} options={OrderThisMonthChart.options} series={OrderThisMonthChart.series} />
            </div>
        </CardBody>
    )
}

export default OrderList