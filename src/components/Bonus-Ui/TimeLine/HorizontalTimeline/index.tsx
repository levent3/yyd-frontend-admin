import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Conference from './Conference'
import MeetUp from './MeetUp'
import Meeting from './Meeting'
import Conference2 from './Conference2'
import Meeting2 from './Meeting2'
import LunchTime from './LunchTime'

const HowizontalTimeline = () => {
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
        <Col xxl={8} xl={7} className='box-col-12'>
            <Card>
                <CardHead title='Horizontal Timeline' subTitle={subMenu} />
                <CardBody>
                    <ul className="list-inline events timeline-list timeline-border row">
                        <Conference />
                        <MeetUp />
                        <Meeting />
                    </ul>
                    <ul className="list-inline events border-0 timeline-list row">
                        <Conference2 />
                        <Meeting2 />
                        <LunchTime />
                    </ul>
                </CardBody>
            </Card>
        </Col >
    )
}

export default HowizontalTimeline