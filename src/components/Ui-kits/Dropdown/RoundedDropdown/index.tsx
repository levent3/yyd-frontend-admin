import CardHead from 'CommonElements/CardHead'
import DropdownCommon from 'CommonElements/Ui-kits/DropdownCommon';
import { RoundedDropdownData } from 'Data/Ui-kits/DropdownData';
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RoundedDemo from './RoundedDemo';

const RoundedDropdown = () => {
    const submenuObj = [
        {
            text: 'When the',
            code: '.show '
        },
        {
            text: 'class starts, dropdown appears. And ',
            code: '.rounded-pill'
        },
        {
            text: " to change rounded dropdowns."
        }
    ]
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CardHead title='Rounded Dropdown' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <div className='btn-group'>
                            <RoundedDemo />
                        </div>
                        {
                            RoundedDropdownData && RoundedDropdownData.map((item, index) => (
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

export default RoundedDropdown