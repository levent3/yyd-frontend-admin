import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import PillNav from './PillNav';
import PillContent from './PillContent';

const PillsTab = () => {
    const [basicTab, setBasicTab] = useState<string>('3');
    const submenuObj = [
        {
            text: 'Use the ',
            code: 'data-bs-toggle="pill"'
        },
        {
            text: ' to tabs pill shape. And mandatory for ',
            code: '.active '
        },
        {
            text: ' class.'
        }
    ]
    return (
        <Col sm={12} xxl={6}>
            < Card className='height-equal' >
                <CardHead title='Pills tabs' subTitle={submenuObj} />
                <CardBody>
                    <PillNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <PillContent tabId={basicTab} />
                </CardBody>
            </Card >
        </Col >
    )
}

export default PillsTab