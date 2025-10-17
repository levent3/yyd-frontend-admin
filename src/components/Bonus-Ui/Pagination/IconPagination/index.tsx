import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import IconList from './IconList'

const IconPagination = () => {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CardHead title='Pagination With Icons' subTitle={[{ text: 'Use an icon or symbol in place of text for some pagination links.' }]} />
                <CardBody>
                    <IconList />
                </CardBody>
            </Card>
        </Col>
    )
}

export default IconPagination