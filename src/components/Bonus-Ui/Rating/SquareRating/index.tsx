import React from 'react'
import { Card, Col } from 'reactstrap'
import { Square_Rating } from '../../../../../utils/Constant'
import SquareRatingBody from './SquareRatingBody'
import CardHead from 'CommonElements/CardHead'

const SquareRating = () => {
    const submenuObj = [
        {
            text: "Square rating is displayed using",
            code: ' emptySymbol & fullSymbol '
        }
    ]
    return (
        <Col xl={4} sm={12} md={6}>
            <Card>
                <CardHead title={Square_Rating} subTitle={submenuObj} />
                <SquareRatingBody />
            </Card>
        </Col>
    )
}

export default SquareRating