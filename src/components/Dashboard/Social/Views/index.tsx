import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, ViewTitle } from 'utils/Constant'
import ViewsChart from './ViewsChart'

const Views = () => {
    return (
        <Card>
            <CardHeader className='card-header card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>{ViewTitle}</h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon icon={false} options={DailyDropdown} btn={{ caret: true, color: 'Outline-primary' }} />
                    </div>
                </div>
            </CardHeader>
            <ViewsChart />
        </Card>
    )
}

export default Views