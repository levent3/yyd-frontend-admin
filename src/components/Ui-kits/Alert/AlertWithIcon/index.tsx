import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import TimeAlert from './TimeAlert'
import HeartAlert from './HeartAlert'

const AlertWithIcon = () => {
    const submenuObj = [
        {
            text: "Use the ",
            code: '.dismiss-text'
        },
        {
            text: ' class to add dismiss text instead of icon'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Alerts With Icons and Text Actions' subTitle={submenuObj} />
                <CardBody className='dark-txt'>
                    <TimeAlert />
                    <HeartAlert />
                </CardBody>
            </Card >
        </Col >
    )
}

export default AlertWithIcon