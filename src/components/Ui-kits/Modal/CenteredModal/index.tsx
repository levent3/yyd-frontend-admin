import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Verticallycentered } from 'utils/Constant'
import CenterdModalBody from './CenteredModalBody'

const CenteredModal = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const submenuObj = [
        {
            text: "Use the ",
            code: '.modal-dialog-centered '
        },
        {
            text: 'through centered modal. and set ',
            code: 'data-bs-target'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col xl={4}>
            <Card>
                <CardHead title='Centered Modal' subTitle={submenuObj} />
                <CardBody>
                    <Button color='success' onClick={() => { toggle() }}>{Verticallycentered}</Button>
                    <CenterdModalBody modal={modal} toggle={toggle} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default CenteredModal