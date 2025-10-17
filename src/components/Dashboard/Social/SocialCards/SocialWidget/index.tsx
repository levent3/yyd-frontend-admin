import RadialChart from 'CommonElements/Dashboard/RadialChart'
import { socialChartType } from 'Types/DashboardType'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

type propstype = {
    data: socialChartType
}

const SocialWidget = ({ data }: propstype) => {
    return (
        <Card className='social-widget widget-hover'>
            <CardBody>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-2'>
                        <div className='social-icons'>
                            <img src={`${ImgPath}/dashboard-5/social/${data.image}`} alt='facebook icon' />
                        </div>
                        <span>{data.title}</span>
                    </div>
                    <span className='font-success f-12 d-xxl-block d-xl-none'>+{data.gros}%</span>
                </div>
                <div className='social-content'>
                    <div>
                        <h5 className='mb-1'>{data.total}</h5>
                        <span className='f-light'>{data.subTitle}</span>
                    </div>
                    <div className='social-chart'>
                        <RadialChart chartData={data.chart} />
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default SocialWidget