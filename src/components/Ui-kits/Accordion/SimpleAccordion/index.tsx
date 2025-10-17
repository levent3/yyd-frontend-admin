import CardHead from '../../../../../CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import SimpleDemo from './SimpleDemo'

const SimpleAccordion = () => {
    const submenuObj = [
        {
            text: 'Click the accordions below to expand/collapse the accordion content. Use the ',
            code: '.accordion '
        },
        {
            text: '.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal' >
                <CardHead title='Simple Accordion' subTitle={submenuObj} />
                <CardBody>
                    <div className='simple-Accordion'>
                        <SimpleDemo />
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default SimpleAccordion