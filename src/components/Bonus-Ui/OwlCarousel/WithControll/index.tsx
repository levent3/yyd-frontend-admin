import CardHead from 'CommonElements/CardHead';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import SlideActive from './SlideActive';

const WithControll = () => {

    const subMenu = [
        {
            text: 'Use the ',
            code: '.carousel-control-prev'
        },
        {
            text: ' & ',
            code: '.carousel-control-next'
        },
        {
            text: ' through previous and next controls. We recommend using ',
            code: '<button>'
        },
        {
            text: ' elements, but you can also use ',
            code: '<a> '
        },
        {
            text: ' elements with ',
            code: 'role="button".'
        }
    ]
    return (
        <Col xl={6} xs={12}>
            <Card>
                <CardHead title='With Controls' subTitle={subMenu} />
                <CardBody>
                    <SlideActive />
                </CardBody>
            </Card>
        </Col>
    )
}

export default WithControll