import Image from 'next/image'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { HelloJashmin, welcomeMessage } from 'utils/Constant'
import Hand from '/public/assets/images/dashboard-3/hand.svg'
import welcome from '/public/assets/images/dashboard-3/widget.svg'

const GreetingCard = () => {
    return (
        <Card className='o-hidden welcome-card'>
            <CardBody>
                <h4 className='mb-3 mt-1 f-w-500 mb-0 f-22'>
                    {HelloJashmin}
                    <span>
                        <Image src={Hand} alt='hand vector' />
                    </span>
                </h4>
                <p>{welcomeMessage}</p>
            </CardBody>
            <Image className='welcome-img' src={welcome} alt='search image' />
        </Card>
    )
}

export default GreetingCard