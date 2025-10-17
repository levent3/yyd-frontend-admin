import CardHead from 'CommonElements/CardHead'
import DropdownCommon from 'CommonElements/Ui-kits/DropdownCommon'
import { BasicDropdownData } from 'Data/Ui-kits/DropdownData'
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import BasicDemo from './BasicDemo'

const BasicDropdown = () => {
    const submenuObj = [
        {
            text: 'When the',
            code: '.show '
        },
        {
            text: 'class starts, dropdown appears. And ',
            code: '.btn-*'
        },
        {
            text: " to change button dark background colors."
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Basic Dropdown' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <BasicDemo />
                        {
                            BasicDropdownData && BasicDropdownData.map((item, index) => (
                                <Fragment key={index}>
                                    <DropdownCommon item={item} />
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BasicDropdown