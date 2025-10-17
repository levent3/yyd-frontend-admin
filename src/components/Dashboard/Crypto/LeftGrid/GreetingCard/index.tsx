import React from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { DepositNow, GreetingMessage4, GreetingMessage4SubMessage, ImgPath } from 'utils/Constant'

const GreetingCard = () => {
    return (
        <Card className='crypto-main-card'>
            <CardBody>
                <div className='deposit-wrap'>
                    <div>
                        <h5>{GreetingMessage4}</h5>
                        <p>{GreetingMessage4SubMessage}</p>
                        <Button color='white' className='f-w-500'>{DepositNow}</Button>
                    </div>
                    <img src={`${ImgPath}/dashboard-4/crypto.png`} alt='crypto' />
                </div>
            </CardBody>
        </Card>
    )
}

export default GreetingCard