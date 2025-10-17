import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ToggleModalBody from './ToggleModalBody'

const ToggleModal = () => {
    const submenuObj = [
        {
            text: "Toggle between multiple modals with some clever placement of the ",
            code: 'data-bs-target '
        },
        {
            text: 'and',
            code: 'data-bs-toggle'
        },
        {
            text: ' attributes.'
        }
    ]
    return (
        <Col xl={4}>
            <Card>
                <CardHead title='Toggle Between Modals' subTitle={submenuObj} />
                <CardBody>
                    <ToggleModalBody />
                </CardBody>
            </Card>
        </Col>
    )
}

export default ToggleModal