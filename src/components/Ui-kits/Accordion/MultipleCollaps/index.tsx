import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CollapesButton from './CollapesButton'
import CollapesBody from './CollapesBody'

const MultipleCollapes = () => {
    const [collapesId, setCollapesId] = useState({
        collapes1: false,
        collapes2: false
    })
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
        <Col sm={12}>
            <Card>
                <CardHead title='Multiple Collapse Accordion' subTitle={submenuObj} />
                <CardBody>
                    <CollapesButton setCollapesId={setCollapesId} collapesId={collapesId} />
                    <CollapesBody collapesId={collapesId} />
                </CardBody>
            </Card >
        </Col >
    )
}

export default MultipleCollapes