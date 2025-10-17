import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon';
import React from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import { RecentOrdersTitle, WeeklyMonDropdown } from 'utils/Constant';
import RecentChart from './RecentChart';

const RecentOrders = () => {
    return (
        <Col xxl={4} xl={7} md={6} sm={5} className='box-col-6'>
            <Card className='height-equal'>
                <CardHeader className='card-no-border'>
                    <div className='header-top'>
                        <h5>{RecentOrdersTitle}</h5>
                        <div className='card-header-right-icon'>
                            <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={WeeklyMonDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span' }} />
                        </div>
                    </div>
                </CardHeader>
                <RecentChart />
            </Card>
        </Col>
    );
};

export default RecentOrders;
