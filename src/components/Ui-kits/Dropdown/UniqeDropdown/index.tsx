import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownForm from './DropdownForm';
import DropdownText from './DropdownText';

const UniqeDropdown = () => {
    const submenuObj = [
        {
            text: 'Unique way to represent form dropdown and text dropdown.'
        }
    ]
    return (
        <Col sm={6}>
            <Card>
                <CardHead title='Unique Dropdown' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <DropdownForm />
                        <DropdownText />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default UniqeDropdown