import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Largebutton, Mediumbutton, Smallbutton, VeryLargebutton } from 'utils/Constant';

const LargeDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='info light btn-lg'>{Largebutton}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem>{Smallbutton}</DropdownItem>
                    <DropdownItem>{Mediumbutton}</DropdownItem>
                    <DropdownItem>{Largebutton}</DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem>{VeryLargebutton}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default LargeDropdown