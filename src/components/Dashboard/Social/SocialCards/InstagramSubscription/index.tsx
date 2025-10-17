import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, InstaGrowth, InstagramSubscribers } from 'utils/Constant'
import InstagramChart from './InstagramChart'

const InstagramSubscription = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>
                        {InstagramSubscribers}
                        <span className='f-14 f-w-500 ms-1 f-light'>({InstaGrowth})</span>
                    </h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', outline: 'Outline-primary pointer' }} />
                    </div>
                </div>
            </CardHeader>
            <InstagramChart />
        </Card>
    )
}

export default InstagramSubscription