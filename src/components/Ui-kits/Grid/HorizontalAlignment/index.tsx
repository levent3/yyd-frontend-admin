import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import HorizontalStart from './HorizontalStart'
import HorizontalCenter from './HorizontalCenter'
import HorizontalEnd from './HorizontalEnd'
import HorizontalTable from './HorizontalTable'

const HorizontalAlignment = () => {
    const submenuObj = [
        {
            text: 'You can use the ',
            code: 'justify-content-*'
        },
        {
            text: ' class to set the horizontal alignment.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Horizontal Alignment' subTitle={submenuObj} />
                <CardBody className='grid-showcase grid-align'>
                    <HorizontalStart />
                    <HorizontalCenter />
                    <HorizontalEnd />
                </CardBody>
                <CardFooter className='card-footer'>
                    <HorizontalTable />
                </CardFooter>
            </Card >
        </Col >
    )
}

export default HorizontalAlignment