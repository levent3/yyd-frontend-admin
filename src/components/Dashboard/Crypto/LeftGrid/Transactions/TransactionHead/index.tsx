import React from 'react'
import { Button, CardHeader, Nav, NavItem } from 'reactstrap'
import { TransactionsTitle } from 'utils/Constant'

type propsType = {
    setActive: (item: string) => void;
    active: string
}

const TransactionHead = ({ setActive, active }: propsType) => {
    const NavTab = ['All', 'Buy', 'Sell'];

    return (
        <CardHeader className='card-no-border'>
            <div className='header-top'>
                <h5>{TransactionsTitle}</h5>
                <Nav tabs className='custom-tab'>
                    {NavTab.map((item, i) => (
                        <NavItem key={i}>
                            <Button color='transparent' onClick={() => setActive(item)} className={`nav-link ${active === item && 'active'}`}>{item}</Button>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </CardHeader>
    )
}

export default TransactionHead