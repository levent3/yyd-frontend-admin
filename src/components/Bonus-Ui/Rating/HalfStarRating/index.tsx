import React from 'react'
import { Card, Col } from 'reactstrap'
import { HalfStar_Rating } from 'utils/Constant'
import HalfStarBody from './HalfStarBody'
import CardHead from 'CommonElements/CardHead'

const HalfStarRating = () => {
    const submenuObj = [
        {
            text: "Star rating is displayed using ",
            code: '.fa-star-o & fa-star'
        },
        {
            text: ' class in rating symbol'
        }
    ]
    return (
        <Col xl={4} sm={12} md={6}>
            <Card>
                <CardHead title={HalfStar_Rating} subTitle={submenuObj} />
                <HalfStarBody />
            </Card>
        </Col>
    )
}

export default HalfStarRating