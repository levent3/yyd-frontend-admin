import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import SvgIcon from 'CommonElements/Icons/SvgIcon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, Visitors } from 'utils/Constant'
import VisitorChart from './VisitorChart'

const VisitorsCard = () => {
    return (
        <Card className='visitor-card'>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>
                        {Visitors}
                        <span className='f-14 font-primary f-w-500 ms-1'>
                            <SvgIcon iconId='user-visitor' className='svg-fill me-1' />(+2.8)
                        </span>
                    </h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', className: 'pointer' }} />
                    </div>
                </div>
            </CardHeader>
            <VisitorChart />
        </Card>
    )
}

export default VisitorsCard