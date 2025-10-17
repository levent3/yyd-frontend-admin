import React from 'react'
import { Col } from 'reactstrap'
import MoonLight from './MoonLight';
import Profile from './Profile';

const Rightbar = () => {
    return (
        <Col xxl={7} xl={6} md={7} xs={8} className='nav-right pull-right right-header p-0 ms-auto'>
            <ul className='nav-menus flex-row'>
                <MoonLight />
                <Profile />
            </ul>
        </Col>
    )
}

export default Rightbar