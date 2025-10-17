import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { DailyDropdown, ValuableCustomerTitle } from 'utils/Constant'
import CustomerList from './CustomerList'

const ValuableCustomer = () => {
    return (
        <div className='appointment'>
            <Card>
                <CardHeader className='card-no-border'>
                    <div className='header-top'>
                        <h5 className='m-0'>{ValuableCustomerTitle}</h5>
                        <div className='card-header-right-icon'>
                        <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span' }} />
                        </div>
                    </div>
                </CardHeader>
                <CustomerList />
            </Card>
        </div>
    )
}

export default ValuableCustomer