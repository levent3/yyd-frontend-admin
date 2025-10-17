import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Crypto, Dashboard, Ecommerce, Project } from 'utils/Constant'

const BasicDemo = () => {
    const [open, setOpen] = useState<boolean>(false)
    const toggle = () => { setOpen(!open) }
    return (
        <div className="btn-group">
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='primary'>{Dashboard}</DropdownToggle>
                <DropdownMenu className="dropdown-content">
                    <DropdownItem href="#">{Project}</DropdownItem>
                    <DropdownItem href="#">{Ecommerce}</DropdownItem>
                    <DropdownItem href="#">{Crypto}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default BasicDemo