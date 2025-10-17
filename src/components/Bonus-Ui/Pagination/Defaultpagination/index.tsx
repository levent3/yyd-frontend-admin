import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DefaultList from './DefaultList'

const DefaultPagination = () => {
    const subMenu = [
        {
            text: 'If the pagination component is used to navigate between a set of search results, an appropriate label could be ',
            code: 'aria-label="Search results pages'
        }
    ]
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CardHead title='Default Pagination' subTitle={subMenu} />
                <CardBody>
                    <DefaultList />
                </CardBody>
            </Card>
        </Col>
    )
}

export default DefaultPagination