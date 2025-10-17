import React, { useState } from 'react'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { BodyText2, Text, Textbody } from 'utils/Constant';

const DropdownText = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='dark'>{Text}</DropdownToggle>
                <DropdownMenu className="dropdown-content">
                    <div className="p-4 text-muted form-wrapper">
                        <p>{Textbody}</p>
                        <p className="mb-0">{BodyText2}</p>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default DropdownText