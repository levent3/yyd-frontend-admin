import React from 'react'
import { Card, Col } from 'reactstrap'
import { Moving_rating } from 'utils/Constant'
import MovingRatingBody from './MovingRatingBody'
import CardHead from 'CommonElements/CardHead'

const MovingRating = () => {
    const submenuObj = [
        {
            text: "Movie rating is displayed using ",
            code: 'step={4}'
        },
        {
            text: ' in react-rating package'
        }
    ]
    return (
        <Col xl={4} sm={12} md={6}>
            <Card>
                <CardHead title={Moving_rating} subTitle={submenuObj} />
                <MovingRatingBody />
            </Card>
        </Col>
    )
}

export default MovingRating