import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, Col } from 'reactstrap'
import ReverseRatingBody from './ReverseRatingbody'

const ReverseRating = () => {
    const submenuObj = [
        {
            text: "Reversed rating is displayed using ",
            code: 'direction="rtl"'
        },
        {
            text: ' Attribute in Rating.'
        }
    ]
    return (
        <Col sm={12} xl={4} md={6}>
            <Card>
                <CardHead title='Reverse Rating' subTitle={submenuObj} />
                <ReverseRatingBody />
            </Card>
        </Col>
    )
}

export default ReverseRating