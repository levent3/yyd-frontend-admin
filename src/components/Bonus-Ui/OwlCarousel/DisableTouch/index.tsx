import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DisableSlider from './DisableSilder'

const DisableTouch = () => {
    const subMenu = [
        {
            text: 'Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the ',
            code: 'data-bs-touch '
        },
        {
            text: ' attribute.'
        }
    ]
    return (
        <Col xl={6} xs={12}>
            <Card>
                <CardHead title='Disable Touch Swiping' subTitle={subMenu} />
                <CardBody>
                    <DisableSlider />
                </CardBody>
            </Card>
        </Col>
    )
}

export default DisableTouch