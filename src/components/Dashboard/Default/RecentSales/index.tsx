import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardHeader, Col } from 'reactstrap'
import { DailyDropdown, RecentSalesTitle } from 'utils/Constant'
import SalesBody from './SalesBody'

const RecentSales = () => {
    return (
        <Col xxl={4} md={6} className='appointment-sec box-col-6'>
            <div className='appointment'>
                <Card>
                    <CardHeader className='card-no-border'>
                        <div className='header-top'>
                            <h5 className='m-0'>{RecentSalesTitle}</h5>
                            <div className='card-header-right-icon'>
                                <DropdownCommon icon={false} options={DailyDropdown} btn={{ caret: true, color: 'Outline-primary' }} />
                            </div>
                        </div>
                    </CardHeader>
                    <SalesBody />
                </Card>
            </div>
        </Col>
    )
}

export default RecentSales