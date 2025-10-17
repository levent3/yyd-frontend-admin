import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Navlinks from './Navlinks';
import { CheckLayouts, Quickoption } from 'utils/Constant';

type navcustomizerType = {
    callbackNav: (test: string, open: boolean) => void;
    selected: string
}
const NavCustomizer = ({ callbackNav, selected }: navcustomizerType) => {
    return (
        <Nav className='flex-column nac-pills'>
            <NavItem>
                <NavLink className={selected === 'check-layout' ? 'active' : ''} onClick={() => callbackNav('check-layout', true)}>
                    <div className='settings'>
                        <i className='icon-paint-bucket'></i>
                    </div>
                    <span>{CheckLayouts}</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={selected === 'sidebar-type' ? 'active' : ''} onClick={() => callbackNav('sidebar-type', true)}>
                    <div className='settings'>
                        <i className='icon-settings'></i>
                    </div>
                    <span>{Quickoption}</span>
                </NavLink>
            </NavItem>
            <Navlinks />
        </Nav>
    )
}

export default NavCustomizer