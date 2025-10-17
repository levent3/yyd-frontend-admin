import CardHead from 'CommonElements/CardHead'
import { HelperCardData } from 'Data/Ui-kits/DropdownData'
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import HelperCommonBody from './HelperCommonBody'

const HelperCard = () => {
    const submenuObj = [
        {
            text: 'When the',
            code: '.show '
        },
        {
            text: 'class starts, dropdown appears.'
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Helper Card' subTitle={submenuObj} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        {
                            HelperCardData && HelperCardData.map((item, index) => (
                                <Fragment key={index}>
                                    <HelperCommonBody item={item} />
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default HelperCard