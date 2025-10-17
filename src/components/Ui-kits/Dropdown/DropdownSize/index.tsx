import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import LargeDropdown from './LargeDropdown'
import SmallDropdown from './SmallDropdown'

const DropdownSize = () => {
    const submenuObj = [
        {
            text: 'When the',
            code: '.show '
        },
        {
            text: 'class starts, dropdown appears. And',
            code: '[.btn-lg/.btn-sm]'
        },
        {
            text: 'class through button size changed.'
        }
    ]
    return (
        <Col md={6}>
            <Card>
                <CardHead title='Dropdown Sizing' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <LargeDropdown />
                        <SmallDropdown />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DropdownSize