import React from 'react'
import { FollowersGoals, FollowersToday } from 'utils/Constant'

const CampaignList = () => {
    return (
        <ul className='campaign-list'>
            <li>
                <div className='campaign-box'>
                    <h5 className='mb-1'>1,897</h5>
                    <span className='f-light'>{FollowersToday}</span>
                </div>
            </li>
            <li>
                <div className='campaign-box'>
                    <h5 className='mb-1'>50,000</h5>
                    <span className='f-light'>{FollowersGoals}</span>
                </div>
            </li>
        </ul>
    )
}

export default CampaignList