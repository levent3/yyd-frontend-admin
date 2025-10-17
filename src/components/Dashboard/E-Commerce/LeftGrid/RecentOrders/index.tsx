import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, RecentOrdersTitle } from 'utils/Constant'
import OrderList from './OrderList'

const RecentOrders = () => {
    return (
        <Card className='recent-order'>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>{RecentOrdersTitle}</h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', className: 'pointer' }} />
                    </div>
                </div>
            </CardHeader>
            <OrderList />
        </Card>
    )
}

export default RecentOrders