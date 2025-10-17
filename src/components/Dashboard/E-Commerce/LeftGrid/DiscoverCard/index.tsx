import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { DiscoverPera, DiscoverPro, ImgPath, UpdateNow } from 'utils/Constant'

const DiscoverCard = () => {
    return (
        <Card className='purchase-card discover'>
            <img className='img-fluid' src={`${ImgPath}/dashboard-2/discover.png`} alt='vector discover' />
            <CardBody className='pt-3'>
                <h5 className='mb-1'>{DiscoverPro}</h5>
                <p className='f-light' >{DiscoverPera} </p>
                <a className='purchase-btn btn btn-hover-effect btn-primary f-w-500' href='https://1.envato.market/3GVzd' target='_blank' rel='noreferrer'>
                    {UpdateNow}
                </a>
            </CardBody>
        </Card>
    )
}

export default DiscoverCard