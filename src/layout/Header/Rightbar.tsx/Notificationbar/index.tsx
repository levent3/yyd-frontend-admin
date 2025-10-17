import SvgIcon from 'CommonElements/Icons/SvgIcon'
import React from 'react'
import { Notitications } from 'utils/Constant'
import NotificationList from './NotificationList'

const Notificationbar = () => {
    return (
        <li className="onhover-dropdown">
            <div className="notification-box">
                <SvgIcon iconId='notification' />
                <span className="badge rounded-pill badge-secondary">4</span>
            </div>
            <div className="onhover-show-div notification-dropdown">
                <h6 className='f-18 mb-0 dropdown-title'>{Notitications}</h6>
                <NotificationList />
            </div>
        </li>
    )
}

export default Notificationbar