import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import NavTabs from './NavTab';
import TabContentMaterial from './TabContentMaterial';

const MaterialStyle = () => {
    const [basicTab, setBasicTab] = useState<string>('1');
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
            text: 'class through access new tabs. And icons of design for attractive webpage.'
        }
    ]
    return (
        <Col xxl={6}>
            <Card>
                <CardHead title='Material Style Tabs' subTitle={submenuObj} />
                <CardBody>
                    <NavTabs basicTab={basicTab} setBasicTab={setBasicTab} />
                    <TabContentMaterial tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default MaterialStyle