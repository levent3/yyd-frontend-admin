import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, FollowerGenderTitle } from 'utils/Constant'
import FollowerChart from './FollowerChart'

const FollowerGender = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top gap-1'>
                    <h5>{FollowerGenderTitle}</h5>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', color: 'Outline-primary pointer' }} />
                </div>
            </CardHeader>
            <FollowerChart />
        </Card>
    )
}

export default FollowerGender