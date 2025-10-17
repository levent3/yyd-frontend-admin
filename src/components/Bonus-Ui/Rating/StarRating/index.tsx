import React from 'react'
import { Card, Col } from 'reactstrap'
import StarRatingbody from './StarRatingbody'
import { Star_Rating } from 'utils/Constant'
import CardHead from 'CommonElements/CardHead'

const StarRating = () => {
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
                <CardHead title={Star_Rating} subTitle={submenuObj} />
                <StarRatingbody />
            </Card>
        </Col>
    )
}

export default StarRating