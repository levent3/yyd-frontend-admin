import CardHead from 'CommonElements/CardHead'
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import AlignTopDemo from './AlignTopDemo'
import { AlignmentData } from 'Data/Ui-kits/DropdownData'
import DropdownCommon from 'CommonElements/Ui-kits/DropdownCommon'

const Alignment = () => {
    const submenuObj = [
        {
            text: 'Use the ',
            code: '(dropstart/dropup/dropend)'
        },
        {
            text: ' this class through change dropdown directions.'
        }
    ]
    return (
        <Col lg={6}>
            <Card>
                <CardHead title='Alignments' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <AlignTopDemo />
                        {
                            AlignmentData && AlignmentData.map((item, index) => (
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

export default Alignment