import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap'
import OrderBody from './OrderBody'
import OrderFooterTable from './OrderFooterTable'

const Order = () => {
    const submenuObj = [
        {
            text: 'Using ',
            code: '.row.order '
        },
        {
            text: 'class, you can set the order position.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Order' subTitle={submenuObj} />
                <CardBody className='grid-showcase'>
                    <OrderBody />
                </CardBody>
                <CardFooter className='card-footer'>
                    <OrderFooterTable />
                </CardFooter>
            </Card >
        </Col >
    )
}

export default Order