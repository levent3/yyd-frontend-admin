import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { DailyDropdown } from 'utils/Constant'
import SmallWidgetsChart from './SmallWidgetsChart'
import { ApexOptions } from 'apexcharts'

type propsType = {
    data: {
        title: string
        total: number
        gros: string
        textColor: string
        chart: {
            series: ApexOptions['series']
            color: string | string[]
        }
    }
}

const SmallWidgets = ({ data }: propsType) => {
    return (
        <Card className='click-widgets widget-hover'>
            <CardBody className='pt-4'>
                <DropdownCommon dropdownMain={{ className: 'text-end icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', color: 'Outline-primary pointer' }} />
                <div className='d-flex justify-content-around'>
                    <div className='click-chart'>
                        <SmallWidgetsChart chartData={data.chart} />
                    </div>
                    <div>
                        <h4 className='mb-0'>%{data.total}</h4>
                        <span className='f-light d-block my-1'>{data.title}</span>
                        <span className={`font-${data.textColor}`}>{data.gros}%</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default SmallWidgets