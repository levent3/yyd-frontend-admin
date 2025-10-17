import React from 'react'
import { Card, Col } from 'reactstrap'
import { Rating10 } from 'utils/Constant';
import BarCardBody from './BarCardBody';
import CardHead from 'CommonElements/CardHead';

const BarRating = () => {
    const submenuObj = [
        {
            text: "Rating is displayed using",
            code: ' step={*}'
        },
        {
            text: ' attr in Rating tag'
        }
    ]
    return (
        <Col xl={4} sm={12} md={6}>
            <Card>
                <CardHead title={Rating10} subTitle={submenuObj} />
                <BarCardBody />
            </Card>
        </Col>
    )
}

export default BarRating