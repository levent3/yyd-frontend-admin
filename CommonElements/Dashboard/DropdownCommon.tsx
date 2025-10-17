import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

type propsType = {
    dropdownMain?: any
    iconName?: string
    btn?: any
    options: string[]
    icon?: boolean
    title?: string
}

const DropdownCommon = ({ dropdownMain, icon , iconName, btn, options, title }: propsType) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown {...dropdownMain} isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle {...btn}>
                {icon && <i className={`${iconName} pointer`}></i>}
                {!icon && !title ? options[0] : title}
            </DropdownToggle>
            <DropdownMenu>
                {
                    options && options.map((item, i) => (
                        <DropdownItem key={i}>{item}</DropdownItem>
                    ))
                }
            </DropdownMenu>
        </Dropdown>
    );
};

export default DropdownCommon;
