import React from 'react'
import { Col } from 'reactstrap'
import { Cancelled, Delivered, LastMonth } from 'utils/Constant'

const OrderDetail = () => {
    return (
        <Col xl={6}>
            <ul className='order-content' >
                <li>
                    <span className='recent-circle bg-primary'> </span>
                    <div>
                        <span className='f-light f-w-500'>{Cancelled} </span>
                        <h4 className='mt-1 mb-0'>2,302
                            <span className='f-light f-14 f-w-400 ms-1'>({LastMonth}) </span>
                        </h4>
                    </div>
                </li>
                <li>
                    <span className='recent-circle bg-info' />
                    <div>
                        <span className='f-light f-w-500'>{Delivered}</span>
                        <h4 className='mt-1 mb-0'>9,302
                            <span className='f-light f-14 f-w-400 ms-1'>({LastMonth})</span>
                        </h4>
                    </div>
                </li>
            </ul>
        </Col>
    )
}

export default OrderDetail