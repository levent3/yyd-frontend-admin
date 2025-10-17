import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { CubaProfile } from 'utils/Constant'
import JustifyNav from './JustifyNav'
import JustifyTabContent from './justifyTabContent'

const JustifyTab = () => {
    const [basicTab, setBasicTab] = useState<string>('2');
    const submenuObj = [
        {
            text: 'Use the ',
            code: '.nav-link'
        },
        {
            text: ' with ',
            code: '.active '
        },
        {
            text: 'class and set content using flex property.'
        }
    ]
    return (
        <Col xxl={6}>
            <Card>
                <CardHead title='Justify Tabs' subTitle={submenuObj} />
                <CardBody>
                    <CardHeader className='d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0'>
                        <p> <em className="txt-danger">{CubaProfile}</em></p>
                        <JustifyNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    </CardHeader>
                    <CardBody className='px-0 pb-0'>
                        <div className='tab-content'>
                            <JustifyTabContent tabId={basicTab} />
                        </div>
                    </CardBody>
                </CardBody>
            </Card>
        </Col>
    )
}

export default JustifyTab