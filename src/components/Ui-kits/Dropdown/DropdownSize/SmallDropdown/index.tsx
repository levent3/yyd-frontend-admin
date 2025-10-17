import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { ExtraSmallbutton, Extraextrasmall, Smallbutton, VerySmallbutton } from 'utils/Constant';

const SmallDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='dark light btn-sm' >{Smallbutton}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem>{Smallbutton}</DropdownItem>
                    <DropdownItem>{VerySmallbutton}</DropdownItem>
                    <DropdownItem>{ExtraSmallbutton}</DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem>{Extraextrasmall}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default SmallDropdown