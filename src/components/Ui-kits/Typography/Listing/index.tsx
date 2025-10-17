import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import UnorderList from './UnorderList'
import OrderList from './OrderList'
import OrderListType2 from './OrderList2'

const Listing = () => {
    const submenuObj = [
        {
            text: "All typography list:- ",
            code: '<ul>'
        },
        {
            text: ' , ',
            code: '<ol>'
        }, {
            text: ' & ',
            code: '<dl>'
        }
    ]
    return (
        <Col sm={12} className='listing'>
            <Card>
                <CardHead title='Listing Typography' subTitle={submenuObj} />
                <CardBody>
                    <Row className='g-3'>
                        <UnorderList />
                        <OrderList />
                        <OrderListType2 />
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}

export default Listing