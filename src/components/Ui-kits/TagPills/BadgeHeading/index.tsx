import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, Col } from 'reactstrap'
import { BadgeHeadingsExample } from 'utils/Constant'
import BadgeHeadingBody from './BadgeHeadingBody'

const BadgeHeading = () => {
    const submenuObj = [
        {
            text: 'All html headings,',
            code: '<h1>'
        },
        {
            text: 'through ',
            code: '<h6>'
        },
        {
            text: ', are available in ',
            code: '.badge '
        },
        {
            text: 'tags.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={BadgeHeadingsExample} subTitle={submenuObj} />
                <BadgeHeadingBody />
            </Card >
        </Col >
    )
}

export default BadgeHeading