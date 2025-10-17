import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { FollowersGrowth, WeeklyMonDropdown } from 'utils/Constant'
import FollowerChart from './FollowerChart'

const FollowerGrowth = () => {
    return (
        <Card className='growth-wrap'>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5>{FollowersGrowth}</h5>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={WeeklyMonDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', color: 'Outline-primary' }} />
                </div>
            </CardHeader>
            <FollowerChart />
        </Card>
    )
}

export default FollowerGrowth