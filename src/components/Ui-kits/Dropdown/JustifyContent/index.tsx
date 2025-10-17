import CardHead from 'CommonElements/CardHead'
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import TextLeftDemo from './TextLeftDemo'
import { JustifyData } from 'Data/Ui-kits/DropdownData'
import DropdownCommon from 'CommonElements/Ui-kits/DropdownCommon'

const JustifyContent = () => {
    const submenuObj = [
        {
            text: 'Use the ',
            code: '(text-start/text-center/text-end)'
        },
        {
            text: ' to change dropdown texts.'
        }
    ]
    return (
        <Col lg={6}>
            <Card>
                <CardHead title='Justify Contents' subTitle={submenuObj} />
                <CardBody className='dropdown-basic m-0'>
                    <div className='common-flex'>
                        <TextLeftDemo />
                        {
                            JustifyData && JustifyData.map((item, index) => (
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

export default JustifyContent