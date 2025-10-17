import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, OrderThisMonthTitle } from 'utils/Constant'
import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import OrderList from './OrderList'

const OrderThisMonth = () => {
    return (
        <Card>
            <CardHeader className='card-header card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>{OrderThisMonthTitle}</h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span' }} />
                    </div>
                </div>
            </CardHeader>
            <OrderList />
        </Card>
    )
}

export default OrderThisMonth