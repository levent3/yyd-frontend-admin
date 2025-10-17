import React from 'react'
import { CardBody } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const MobileBody = () => {
    return (
        <CardBody className='p-0 text-end'>
            <img className='wavy' src={`${ImgPath}/dashboard-5/wave.png`} alt='wave' />
            <img src={`${ImgPath}/dashboard-5/mobile-img.png`} alt='mobile' />
        </CardBody>
    )
}

export default MobileBody