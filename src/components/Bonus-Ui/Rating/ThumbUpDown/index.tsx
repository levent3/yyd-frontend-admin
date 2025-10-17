import React from 'react'
import { Card, CardHeader, Col } from 'reactstrap'
import { ThumbUpDownRate } from 'utils/Constant'
import Thumbbody from './ThumbBody'
import CardHead from 'CommonElements/CardHead'

const ThumbUpDown = () => {
    const submenuObj = [
        {
            text: "Thumb rating is displayed using ",
            code: '.fa-thumbs-up & .fa-thumbs-down'
        },
        {
            text: ' class in rating symbol'
        }
    ]
    return (
        <Col xl={4} sm={12} md={6}>
            <Card>
                <CardHead title={ThumbUpDownRate} subTitle={submenuObj} />
                <Thumbbody />
            </Card>
        </Col>
    )
}

export default ThumbUpDown