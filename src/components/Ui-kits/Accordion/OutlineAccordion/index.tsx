import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import OutlineDemo from './OutlineDemo'

const OutlineAccordion = () => {
    const submenuObj = [
        {
            text: 'Add Custom ',
            code: '.accordion-wrapper'
        },
        {
            text: ' class to add border flash and background-color property.'
        }
    ]
    return (
        <Col xl={6} sm={12}>
            <Card>
                <CardHead title='Outline Accordion' subTitle={submenuObj} />
                <CardBody>
                    <div className='outline-accordion'>
                        <OutlineDemo />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default OutlineAccordion