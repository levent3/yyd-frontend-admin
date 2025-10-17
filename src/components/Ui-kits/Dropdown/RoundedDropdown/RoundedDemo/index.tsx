import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Dark, Light, Lighter, Primary } from 'utils/Constant'

const RoundedDemo = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Dropdown isOpen={open} toggle={toggle} direction='down'>
            <DropdownToggle color='primary rounded-pill'>{Primary}</DropdownToggle>
            <DropdownMenu className="dropdown-content">
                <DropdownItem href="#">{Dark}</DropdownItem>
                <DropdownItem href="#">{Light}</DropdownItem>
                <DropdownItem href="#">{Lighter}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default RoundedDemo