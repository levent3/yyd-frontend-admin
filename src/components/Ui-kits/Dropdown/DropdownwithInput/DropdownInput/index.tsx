import React, { useState } from 'react'
import { Dropdown,  DropdownMenu, DropdownToggle } from 'reactstrap'
import { Defaultcheckbox, Defaultradio, Inputs } from 'utils/Constant'

const DropdownInput = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Dropdown isOpen={open} toggle={toggle} direction='down'>
            <DropdownToggle color='warning'>{Inputs}</DropdownToggle>
            <DropdownMenu className="dropdown-content">
                <li >
                <div className="input-group rounded-0 border-0 shadow-none">
                    <div className="input-group-text p-0 gap-2">
                        <input className="form-check-input mt-0" type="checkbox" />
                        <span>{Defaultcheckbox}</span>
                    </div>
                </div>
                <div className="input-group rounded-0 border-0 shadow-none ">
                    <div className="input-group-text p-0 gap-2">
                        <input className="form-check-input mt-0" type="radio" />
                        <span>{Defaultradio}</span>
                    </div>
                </div>
                </li>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropdownInput