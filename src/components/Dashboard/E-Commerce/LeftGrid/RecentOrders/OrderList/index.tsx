import React, { useState } from 'react'
import { CardBody, Nav } from 'reactstrap'
import { ImgPath } from 'utils/Constant';
import RecentOrderTab from '../RecentOrderTab';

const OrderList = () => {
    const [isActive, setIsActive] = useState('0');
    const RecentOrdersNav = ['1', '2', '3', '4', '5'];

    const activeHandle = (i: number) => {
        setIsActive(`${i}`);
    };
    return (
        <CardBody className='pt-0'>
            <div className='recent-sliders'>
                <Nav tag='div' pills={true} tabs>
                    {RecentOrdersNav.map((item, j) => (
                        <button key={j} onClick={(e) => activeHandle(j)} className={`frame-box ${isActive === `${j}` && 'active'}`}>
                            <span className='frame-image'>
                                <img src={`${ImgPath}/dashboard-2/order/${item}.png`} alt='vector T-shirt' />
                            </span>
                        </button>
                    ))}
                </Nav>
                <RecentOrderTab isActive={isActive} RecentOrdersNav={RecentOrdersNav} />
            </div>
        </CardBody>
    )
}

export default OrderList