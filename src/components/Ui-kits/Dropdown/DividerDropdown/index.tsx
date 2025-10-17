import CardHead from 'CommonElements/CardHead'
import { DividerCommonData } from 'Data/Ui-kits/DropdownData'
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DividerCommon from './DividerCommon'

const DividerDropdown = () => {
    const submenuObj = [
        {
            text: 'When the',
            code: '.show '
        },
        {
            text: 'class starts, dropdown appears. And',
            code: '.dropdown-divider'
        },
        {
            text: ' to change dropdown section.'
        }
    ]
    return (
        <Col md={6}>
            <Card>
                <CardHead title='Divider Dropdown' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        {
                            DividerCommonData && DividerCommonData.map((item, index) => (
                                <Fragment key={index}>
                                    <DividerCommon item={item} />
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DividerDropdown