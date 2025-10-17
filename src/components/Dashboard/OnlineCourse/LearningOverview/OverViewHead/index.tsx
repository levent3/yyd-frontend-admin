import React from 'react'
import { CardHeader } from 'reactstrap'
import DropdownCommon from '../../../../../../CommonElements/Dashboard/DropdownCommon'
import { DailyDropdown, LearningOverviewGrowth, LearningOverviewTitle } from '../../../../../../utils/Constant'

const OverViewHead = () => {
    return (
        <CardHeader className='card-no-border'>
            <div className='header-top'>
                <h5 className='m-0'>
                    {LearningOverviewTitle}
                    <span className='f-14 f-w-500 ms-1 f-light'>({LearningOverviewGrowth})</span>
                </h5>
                <div className='card-header-right-icon'>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span' }} />
                </div>
            </div>
        </CardHeader>
    )
}

export default OverViewHead