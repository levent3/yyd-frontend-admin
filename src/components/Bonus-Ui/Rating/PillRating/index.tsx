import React from 'react'
import { Card, Col } from 'reactstrap'
import { Pill_Rating } from 'utils/Constant'
import PillBody from './PillBody'
import CardHead from 'CommonElements/CardHead'

const PillRating = () => {
    const submenuObj = [
        {
            text: "Pill rating is displayed using ",
            code: '.pill-rating'
        },
        {
            text: ' class'
        }
    ]
    return (
        <Col xl={4} sm={12} md={6}>
            <Card>
                <CardHead title={Pill_Rating} subTitle={submenuObj} />
                <PillBody />
            </Card>
        </Col>
    )
}

export default PillRating