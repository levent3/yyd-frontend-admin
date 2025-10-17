import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Hover1 from './Hover1'
import HoverEvent from './HoverEvent'
import MeetingEvent from './MeetingEvent'

const HoverTimeline = () => {
    const subMenu = [
        {
            text: 'Use the ',
            code: '.square-timeline'
        },
        {
            text: ' main class through create new variations of timeline.'
        }
    ]
    return (
        <Col xl={6}>
            <Card className='height-equal' style={{minHeight:"836.297px"}}>
                <CardHead title='Hovering Timeline' subTitle={subMenu} />
                <CardBody>
                    <ul className="square-timeline">
                        <Hover1 />
                        <HoverEvent />
                        <MeetingEvent />
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default HoverTimeline