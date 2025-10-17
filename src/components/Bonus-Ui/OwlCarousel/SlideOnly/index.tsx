import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import SlideSlick from './SlideSlick'

const SlideOnly = () => {
    const subMenu = [
        {
            text: 'The ',
            code: '.active'
        },
        {
            text: ' class needs to be added to one of the slides otherwise the carousel will not be visible.',
            code: '.d-block'
        },
        {
            text: ' and ',
            code: '.w-100 '
        },
        {
            text: ' on carousel images to prevent browser default image alignment.'
        }
    ]
    return (
        <Col xl={6} xs={12}>
            <Card>
                <CardHead title='Slides Only' subTitle={subMenu} />
                <CardBody>
                    <SlideSlick />
                </CardBody>
            </Card>
        </Col>

    )
}

export default SlideOnly