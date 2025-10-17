import React from 'react'
import { Card, CardFooter, CardHeader, Col } from 'reactstrap'
import { Card_Footer, DarkColorCard, DarkHeadtext } from '../../../../../utils/Constant'
import DarkCardBody from './DarkCardBody'

const DarkCard = () => {
    return (
        <Col sm={12}>
            <Card className='Dark-Card'>
                <CardHeader className='bg-dark'>
                    <h4 className="text-white">{DarkColorCard}</h4>
                    <p className="f-m-light mt-1">{DarkHeadtext}</p>
                </CardHeader>
                <DarkCardBody />
                <CardFooter className='bg-dark'>
                    <h6 className="mb-0">{Card_Footer}</h6>
                </CardFooter>
            </Card>
        </Col>
    )
}

export default DarkCard