import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ActiveList from './ActiveList'

const ActiveDisable = () => {
    const subMenu = [
        {
            text: 'Use ',
            code: '.disabled '
        },
        {
            text: 'for links that appear un-clickable and',
            code: ' .active'
        },
        {
            text: ' to indicate the current page.'
        }
    ]
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CardHead title='Pagination With Active And Disabled' subTitle={subMenu} />
                <CardBody>
                    <ActiveList />
                </CardBody>
            </Card>
        </Col>
    )
}

export default ActiveDisable