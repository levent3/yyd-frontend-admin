import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { ActivitiesTitle, DailyDropdown } from 'utils/Constant'
import ActivityList from './ActivityList'

const Activities = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>{ActivitiesTitle}</h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', color: 'Outline-primary pointer' }} />
                    </div>
                </div>
            </CardHeader>
            <CardBody className='pt-0 activity-card'>
                <div className='appointment-table customer-table table-responsive'>
                    <ActivityList />
                </div>
            </CardBody>
        </Card>
    )
}

export default Activities