import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Components, Home, Pages, Settings } from 'utils/Constant';

type propsType = {
    basicTab: string;
    setBasicTab: (data: string) => void;
}

const VerticalNav = ({ basicTab, setBasicTab }: propsType) => {
    return (
        <Nav tabs className='flex-column nav-pills nav-success border-0'>
            <NavItem>
                <NavLink href="#" className={`${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{Home}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className={`${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{Components}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className={`${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{Pages}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className={`${basicTab === '4' ? 'active' : ''}`} onClick={() => setBasicTab('4')}>{Settings}</NavLink>
            </NavItem>
        </Nav>
    )
}

export default VerticalNav