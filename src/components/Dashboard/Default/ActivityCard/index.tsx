import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader, Col } from 'reactstrap'
import { Activity, DailyDropdown } from 'utils/Constant'
import ActivityCardBody from './ActivityCardBody'

const ActivityCard = () => {
    return (
        <Col xxl={4} xl={5} md={6} sm={7} className='notification box-col-6'>
            <Card className='height-equal'>
                <CardHeader className='card-no-border'>
                    <div className='header-top'>
                        <h5 className='m-0'>{Activity}</h5>
                        <div className='card-header-right-icon'>
                            <DropdownCommon icon={false} options={DailyDropdown} btn={{ caret: true, color: 'Outline-primary' }} />
                        </div>
                    </div>
                </CardHeader>
                <ActivityCardBody />
            </Card>
        </Col>
    )
}

export default ActivityCard