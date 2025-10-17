import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { TopCategoriesTitle } from 'utils/Constant'
import TopCategories from './TopCategories'
import RecentActivities from './RecentActivities'

const RightGrid = () => {
    return (
        <Col xxl={2} xl={3} md={4} className='grid-ed-none box-col-4e d-xxl-block d-none'>
            <Card>
                <CardHeader className='card-no-border'>
                    <h5>{TopCategoriesTitle}</h5>
                </CardHeader>
                <CardBody className='pt-0'>
                    <TopCategories />
                    <RecentActivities />
                </CardBody>
            </Card>
        </Col>
    )
}

export default RightGrid