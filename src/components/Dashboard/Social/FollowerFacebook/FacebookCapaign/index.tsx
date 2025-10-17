import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { Active, FacebookCampaignTitle } from 'utils/Constant'
import CampaignList from './CampaignList'
import CustomersList from './CustomersList'

const FacebookCampaign = () => {
    return (
        <Card className=' follower-wrap'>
            <CardHeader className='card-no-border'>
                <h5 className='mb-1'>{FacebookCampaignTitle}</h5>
                <div className='d-inline-block badge badge-light-success rounded-pill'>{Active}</div>
            </CardHeader>
            <CardBody className='pt-0 papernote-wrap'>
                <CampaignList />
                <CustomersList />
            </CardBody>
        </Card>
    )
}

export default FacebookCampaign