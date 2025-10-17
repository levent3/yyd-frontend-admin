import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RoundedList from './RoundedList'

const RoundedPagination = () => {
    const subMenu = [
        {
            text: 'Used in rounded pagination.Use an icon or symbol in place of text for some pagination links.',
            code: '[.rounded-circle]'
        }
    ]
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CardHead title=' Rounded Pagination' subTitle={subMenu} />
                <CardBody>
                    <RoundedList />
                </CardBody>
            </Card>
        </Col>
    )
}

export default RoundedPagination