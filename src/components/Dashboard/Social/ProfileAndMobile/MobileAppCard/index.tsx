import React from 'react'
import { Button, Card, CardHeader } from 'reactstrap'
import { HaveYouTriedOur, MobileApplication, TryNow } from 'utils/Constant'
import MobileBody from './MobileBody'

const MobileAppCard = () => {
    return (
        <Card className='mobile-app-card'>
            <CardHeader className='card-no-border pb-0'>
                <h5 className='mb-3'>
                    <span className='f-16 f-light'>{HaveYouTriedOur} </span>
                    {MobileApplication}
                </h5>
                <Button color='primary' className='purchase-btn btn-hover-effect f-w-500' type='button'>{TryNow}</Button>
            </CardHeader>
            <MobileBody />
        </Card>
    )
}

export default MobileAppCard