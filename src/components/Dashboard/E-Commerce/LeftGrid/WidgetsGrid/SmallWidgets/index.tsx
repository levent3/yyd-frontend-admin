import SvgIcon from 'CommonElements/Icons/SvgIcon';
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CountUp from 'react-countup';

type propsType = {
    mainClass?: string;
    data: any
}

const SmallWidgets = ({ data, mainClass }: propsType) => {
    return (
        <Card className={`small-widget ${mainClass ? mainClass : ''}`}>
            <CardBody className={data.color}>
                <span className='f-light'>{data.title}</span>
                <div className='d-flex align-items-end gap-1'>
                    <h4>
                        <CountUp suffix={data.suffix ? data.suffix : ''} prefix={data.prefix ? data.prefix : ''} duration={0} separator=',' end={data.total} />
                    </h4>
                    <span className={`font-${data.color} f-12 f-w-500`}>
                        <i className={`icon-arrow-${data.gros < 50 ? 'down' : 'up'}`} />
                        <span>
                            {data.gros < 50 ? '-' : '+'}
                            {data.gros}%
                        </span>
                    </span>
                </div>
                <div className='bg-gradient'>
                    <SvgIcon iconId={data.icon} className='stroke-icon svg-fill' />
                </div>
            </CardBody>
        </Card>
    )
}

export default SmallWidgets