import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { DarkNight, Darkmoon, Darkowl, Nightfall } from 'utils/Constant';

const DarkDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {

            code: '.dropdown-menu-dark '
        },
        {
            text: 'class through make dark mode.'
        }
    ]
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CardHead title='Dark Dropdown' subTitle={submenuObj} />
                <CardBody className='dropdown-basic m-0 rtl-dropdown'>
                    <div className='common-flex dark-dropdown'>
                        <Dropdown isOpen={open} toggle={toggle} direction='down'>
                            <DropdownToggle color='dark'>{DarkNight}</DropdownToggle>
                            <DropdownMenu className="dropdown-menu-dark dropdown-menu-dark">
                                <DropdownItem href="#" className='bg-light-dark text-light' >{Darkmoon}</DropdownItem>
                                <DropdownItem href="#">{Darkowl}</DropdownItem>
                                <DropdownItem href="#">{Nightfall}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DarkDropdown