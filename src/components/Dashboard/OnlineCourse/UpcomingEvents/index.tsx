import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, UpcomingEventsTitle } from 'utils/Constant'
import UpcomingEventChart from './UpcomingEventChart'

const UpcomingEvents = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5>{UpcomingEventsTitle}</h5>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', className: 'pointer' }} />
                </div>
            </CardHeader>
            <UpcomingEventChart />
        </Card>
    )
}

export default UpcomingEvents