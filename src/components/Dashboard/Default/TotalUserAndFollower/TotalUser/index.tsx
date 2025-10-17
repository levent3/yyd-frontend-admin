import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { TotalUsers, WeeklyMonDropdown } from 'utils/Constant'
import TotalUserBody from './TotalUserBody'

const TotalUser = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5>{TotalUsers}</h5>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={WeeklyMonDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span' }} />
                </div>
            </CardHeader>
            <TotalUserBody />
        </Card>
    )
}

export default TotalUser