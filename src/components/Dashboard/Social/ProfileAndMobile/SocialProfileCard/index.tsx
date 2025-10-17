import SvgIcon from 'CommonElements/Icons/SvgIcon'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { ImgPath } from 'utils/Constant'
import SocialDetail from './SocialDetail'

const SocialProfileCard = () => {
    return (
        <Card className='social-profile'>
            <CardBody>
                <div className='social-img-wrap'>
                    <div className='social-img'>
                        <img src={`${ImgPath}/dashboard-5/profile.png`} alt='profile' />
                    </div>
                    <div className='edit-icon'>
                        <SvgIcon iconId='profile-check' />
                    </div>
                </div>
                <SocialDetail />
            </CardBody>
        </Card>
    )
}

export default SocialProfileCard