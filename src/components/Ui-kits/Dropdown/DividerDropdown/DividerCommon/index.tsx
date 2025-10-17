import { BasicDropdownType } from 'Types/UikitesType'
import React, { Fragment, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

type propsType = {
    item: BasicDropdownType
}

const DividerCommon = ({ item }: propsType) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color={item.class}>{item.text}</DropdownToggle>
                <DropdownMenu className="dropdown-menu dropdown-block">
                    {
                        item.menulist && item.menulist.map((item, index) => (
                            <Fragment key={index}>
                                {
                                    item !== '' ? <DropdownItem>{item}</DropdownItem> : <DropdownItem divider></DropdownItem>
                                }
                            </Fragment>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default DividerCommon