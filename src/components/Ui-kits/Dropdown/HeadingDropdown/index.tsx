import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Balloons, Cake, Party, PartyList } from 'utils/Constant';

const HeadingDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {
            text: 'Main heading and any sub-content in dropdown.'
        }
    ]
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CardHead title='Heading Dropdown' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown heading-dropdown'>
                    <div className='common-flex'>
                        <div className='btn-group'>
                            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                                <DropdownToggle color='success rounded-pill'>{Party}</DropdownToggle>
                                <DropdownMenu className="dropdown-content">
                                    <DropdownItem href="#" header className='fw-bold fs-6 border-bottom border-2'>{PartyList}</DropdownItem>
                                    <DropdownItem href="#">{Balloons}</DropdownItem>
                                    <DropdownItem href="#">{Cake}</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default HeadingDropdown