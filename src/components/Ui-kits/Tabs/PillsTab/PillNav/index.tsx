import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Aboutus, Blog, Contactus } from 'utils/Constant';

type propsType = {
    basicTab: string;
    setBasicTab: (data: string) => void;
}

const PillNav = ({ basicTab, setBasicTab }: propsType) => {
    return (
        <Nav tabs className='nav-pills nav-primary border-0'>
            <NavItem>
                <NavLink href="#" className={`${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{Aboutus}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className={`${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{Contactus}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className={`${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{Blog}</NavLink>
            </NavItem>
        </Nav>
    )
}

export default PillNav