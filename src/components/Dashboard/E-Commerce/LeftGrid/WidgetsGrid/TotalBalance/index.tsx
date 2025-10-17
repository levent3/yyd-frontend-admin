import Link from 'next/link'
import React from 'react'
import CountUp from 'react-countup'
import { Card, CardBody } from 'reactstrap'
import { ImgPath, TapUpBalance, ThisMonth, TotalBalanceTitle } from 'utils/Constant'

const TotalBalance = () => {
    return (
        <Card className='o-hidden'>
            <CardBody className='balance-widget'>
                <span className='f-w-500 f-light'>{TotalBalanceTitle}</span>
                <h4 className='mb-3 mt-1 f-w-500 mb-0 f-22'>
                    <CountUp prefix='$' duration={5} start={0} separator=',' end={245154} />
                    <span className='f-light f-14 f-w-400 ms-1'>{ThisMonth}</span>
                </h4>
                <Link className='purchase-btn btn btn-primary btn-hover-effect f-w-500' href='#'>
                    {TapUpBalance}
                </Link>
                <div className='mobile-right-img'>
                    <img className='left-mobile-img' src={`${ImgPath}/dashboard-2/widget-img.png`} alt='widget' />
                    <img className='mobile-img' src={`${ImgPath}/dashboard-2/mobile.gif`} alt='mobile with coin' />
                </div>
            </CardBody>
        </Card>
    )
}

export default TotalBalance