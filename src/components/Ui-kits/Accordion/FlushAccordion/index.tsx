import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import FlushDemo from './FlushDemo'

const FlushAccordion = () => {
    const submenuObj = [
        {
            text: 'Add ',
            code: '.accordion-flush'
        },
        {
            text: ' to remove the default',
            code: 'background-color'
        },
        {
            text: ' , some borders, and some rounded corners to render accordions edge-to-edge with their parent container.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal' >
                <CardHead title='Flush Accordion' subTitle={submenuObj} />
                <CardBody>
                    <div className='Flush-Accordion'>
                        <FlushDemo />
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default FlushAccordion