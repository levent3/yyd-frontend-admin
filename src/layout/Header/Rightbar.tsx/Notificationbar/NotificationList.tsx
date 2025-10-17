import React from 'react'
import { Checkall, DeliveryComplete, Deliveryprocessing, OrderComplete, TicketsGenerated } from 'utils/Constant'

const NotificationList = () => {
    return (
        <ul className='simple-list'>
            <li className="b-l-primary border-4">
                <p>{Deliveryprocessing} <span className="font-danger">10 min</span></p>
            </li>
            <li className="b-l-success border-4">
                <p>{OrderComplete}<span className="font-success">1 hr</span></p>
            </li>
            <li className="b-l-secondary border-4">
                <p>{TicketsGenerated}<span className="font-secondary">3 hr</span></p>
            </li>
            <li className="b-l-warning border-4">
                <p>{DeliveryComplete}<span className="font-warning">6 hr</span></p>
            </li>
            <li><a className="f-w-700" href="#">{Checkall}</a></li>
        </ul>
    )
}

export default NotificationList