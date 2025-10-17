import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import IconTabbody from './IconTabBody';
import IconNav from './IconNav';

const IconTabs = () => {
    const [basicTab, setBasicTab] = useState<string>('1');
    const submenuObj = [
        {
            text: 'Use the ',
            code: '.nav-link '
        },
        {
            text: 'with feather icons. And ',
            code: '.show'
        },
        {
            text: ' class to tabs change.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Icons With Tabs' subTitle={submenuObj} />
                <CardBody>
                    <IconNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <IconTabbody tabId={basicTab} />
                </CardBody>
            </Card >
        </Col >
    )
}

export default IconTabs