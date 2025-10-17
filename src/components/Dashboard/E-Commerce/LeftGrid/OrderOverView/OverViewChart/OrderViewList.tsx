import React from 'react'
import { Earning, Order, Refunds } from 'utils/Constant'

const OrderViewList = () => {
    return (
        <ul className='d-flex balance-data'>
            <li>
                <span className='circle bg-secondary' />
                <span className='f-light ms-1'>{Refunds}</span>
            </li>
            <li>
                <span className='circle bg-primary'> </span>
                <span className='f-light ms-1'>{Earning}</span>
            </li>
            <li>
                <span className='circle bg-success'> </span>
                <span className='f-light ms-1'>{Order}</span>
            </li>
        </ul>
    )
}

export default OrderViewList