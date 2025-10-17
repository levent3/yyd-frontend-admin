import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { AllCampaignsTitle, DailyDropdown } from 'utils/Constant'
import CampaignsUser from './CampaignsUser'

const AllCampaigns = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>{AllCampaignsTitle}</h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', color: 'Outline-primary pointer' }} />
                    </div>
                </div>
            </CardHeader>
            <CardBody className='pt-0 campaign-table'>
                <div className='recent-table table-responsive currency-table'>
                    <CampaignsUser />
                </div>
            </CardBody>
        </Card>
    )
}

export default AllCampaigns