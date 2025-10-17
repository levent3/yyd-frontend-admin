import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Hello, Howareyou, Textleft, Whatareyou } from 'utils/Constant'

const TextLeftDemo = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='primary'>{Textleft}</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>{Hello}</DropdownItem>
                    <DropdownItem>{Howareyou}</DropdownItem>
                    <DropdownItem>{Whatareyou}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default TextLeftDemo