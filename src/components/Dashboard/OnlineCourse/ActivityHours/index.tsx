import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import { ActivityHoursTitle, DailyDropdown } from 'utils/Constant'
import ActivityChart from './ActivityChart'
import ActivityLightBox from './ActivityLightBox'

const ActivityHours = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5>{ActivityHoursTitle}</h5>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', className: 'pointer' }} />
                </div>
            </CardHeader>
            <CardBody className='pt-0'>
                <Row className='m-0 overall-card'>
                    <ActivityChart />
                    <ActivityLightBox />
                </Row>
            </CardBody>
        </Card>
    )
}

export default ActivityHours