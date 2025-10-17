import SvgIcon from 'CommonElements/Icons/SvgIcon'
import { mainGridtype } from 'Types/DashboardType'
import React from 'react'
import Currencytitle from './CurrencyTitle'
import { Card, CardBody } from 'reactstrap'
import { TrendingUp } from 'react-feather'
import CurrencyWidgetChart from './CurrencyWidgetChart'
import dynamic from 'next/dynamic'

type propsType = {
    data: mainGridtype
    mainClass?: string
}

const CurrencyWidget = ({ data, mainClass }: propsType) => {
    const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

    return (
        <div className={`currency-widget ${data.color} ${mainClass ? mainClass : ''}`}>
            <Currencytitle icon={data.icon} title={data.title} shortName={data.shortName} />
            <Card>
                <CardBody className='d-flex'>
                    <div className='currency-chart-wrap'>
                        <CurrencyWidgetChart chartData={data.chart} />
                    </div>
                    <div className={`bg-light-${data.color} text-center`}>
                        <h5 className='mb-0' >${data.price}</h5>
                        <span className={`f-12 f-w-500 font-${data.color}`}>
                            <TrendingUp className='me-1' />+{data.gros}%
                        </span>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default CurrencyWidget