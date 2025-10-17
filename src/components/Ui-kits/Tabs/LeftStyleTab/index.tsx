import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import MaterialTab from './MaterialTab';
import MaterialBody from './Materialbody';

const LeftStyleTab = () => {
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
            text: 'class through jump another tabs.And ',
            code: "aria-orientation='vertical'"
        },
        {
            text: 'thorough change vertical tabs.'
        }
    ]
    return (
        <Col xxl={6}>
            <Card>
                <CardHead title='Material Style Left Tabs' subTitle={submenuObj} />
                <CardBody>
                    <div className='tabs-responsive-side'>
                        <div className='material-wrapper'>
                            <MaterialTab basicTab={basicTab} setBasicTab={setBasicTab} />
                            <div className='material-content'>
                                <MaterialBody tabId={basicTab} />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LeftStyleTab