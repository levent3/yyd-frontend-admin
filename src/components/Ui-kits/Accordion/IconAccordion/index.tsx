import React from 'react'
import CardHead from 'CommonElements/CardHead'
import { Card, CardBody, Col } from 'reactstrap'
import IconDemo from './IconDemo'

const IconAccordion = () => {
    const submenuObj = [
        {
            text: 'A ',
            code: '<button/>'
        },
        {
            text: ' can show and hide multiple elements by update state object true or false'
        }
    ]
    return (
        <Col xl={6} sm={12}>
            <Card>
                <CardHead title='With Icons Accordion' subTitle={submenuObj} />
                <CardBody>
                    <div className='icon-accordion ui-accordion'>
                        <IconDemo />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default IconAccordion