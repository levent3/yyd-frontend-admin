import CardHead from 'CommonElements/CardHead'
import { SplitDropdownData } from 'Data/Ui-kits/DropdownData';
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { Chart, General, Widgets } from 'utils/Constant';
import CommonUncontroll from './CommonUncontroll';

const SplitDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {
            text: 'When the',
            code: '.show '
        },
        {
            text: 'class starts, dropdown appears. And split the dropdown ',
            code: '.dropdown-toggle-split'
        }
    ]
    return (
        <Col sm={12} xl={12}>
            <Card>
                <CardHead title='Split Dropdown' subTitle={submenuObj} />
                <CardBody className='dropdown-basic me-0'>
                    <div className='common-flex'>
                        <div className='btn-group'>
                            <Button color='outline-primary'>{Widgets}</Button>
                            <UncontrolledDropdown className='separated-btn' isOpen={open} toggle={toggle} direction='down'>
                                <DropdownToggle color='primary'><i className="icofont icofont-arrow-down"></i></DropdownToggle>
                                <DropdownMenu className="dropdown-content">
                                    <DropdownItem href="#">{General}</DropdownItem>
                                    <DropdownItem href="#">{Chart}</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        {
                            SplitDropdownData && SplitDropdownData.map((item, index) => (
                                <Fragment key={index}>
                                    <CommonUncontroll item={item} />
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default SplitDropdown