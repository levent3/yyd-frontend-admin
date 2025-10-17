import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import BorderNav from './BorderNav';
import TabComponent from './TabComponent';

const BorderTabs = () => {
    const [basicTab, setBasicTab] = useState<string>('2');
    const submenuObj = [
        {
            text: 'Use the ',
            code: '.nav-link '
        },
        {
            text: 'with ',
            code: '.active '
        },
        {
            text: 'class. And hover effect added on bottom border styles.'
        }
    ]
    return (
        <Col xxl={6}>
            <Card>
                <CardHead title='Border Tabs' subTitle={submenuObj} />
                <CardBody>
                    <BorderNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <TabComponent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderTabs