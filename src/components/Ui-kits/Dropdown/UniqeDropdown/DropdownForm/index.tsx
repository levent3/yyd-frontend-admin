import React, { useState } from 'react'
import { Button, Dropdown, DropdownMenu, DropdownToggle, Form, Input, Label } from 'reactstrap'
import { Dropdownform, Emailaddress, Password, Rememberme, Signin } from 'utils/Constant';

const DropdownForm = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='secondary'>{Dropdownform}</DropdownToggle>
                <DropdownMenu className="dropdown-content">
                    <Form className="p-4 form-wrapper dark-form">
                        <div className="mb-3">
                            <Label className="form-label" htmlFor="exampleDropdownFormEmail2">{Emailaddress}</Label>
                            <Input id="exampleDropdownFormEmail2" type="email" placeholder="email@example.com" />
                        </div>
                        <div className="mb-3">
                            <Label className="form-label" htmlFor="exampleDropdownFormPassword2">{Password}</Label>
                            <Input className="form-control" id="exampleDropdownFormPassword2" type="password" placeholder="Password" />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <Input className="form-check-input" id="dropdownCheck2" type="checkbox" />
                                <Label className="form-check-label" htmlFor="dropdownCheck2">{Rememberme}</Label>
                            </div>
                        </div>
                        <Button color='dark' type="submit" onClick={() => { toggle() }}>{Signin}</Button>
                    </Form>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default DropdownForm