import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Becareful, Beware, Notifications, Warningtop } from 'utils/Constant';

const AlignTopDemo = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group dropup'>
            <Dropdown isOpen={open} toggle={toggle} direction='up'>
                <DropdownToggle color='warning' >{Warningtop}</DropdownToggle>
                <DropdownMenu className="dropdown-menu dropdown-block">
                    <DropdownItem href="#">{Becareful}</DropdownItem>
                    <DropdownItem href="#">{Notifications}</DropdownItem>
                    <DropdownItem href="#">{Beware}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default AlignTopDemo