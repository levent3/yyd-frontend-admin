import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap'
import VerticalStart from './VerticalStart'
import VerticalCenter from './VerticalCenter'
import VerticalEnd from './VerticalEnd'
import FooterTable from './FooterTable'

const VerticalAlignment = () => {
    const submenuObj = [
        {
            text: 'You can use the ',
            code: 'align-items-*'
        },
        {
            text: ' class to set the Vertical alignment.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Vertical Alignment' subTitle={submenuObj} />
                <CardBody className='grid-showcase mb-0'>
                    <Row>
                        <VerticalStart />
                        <VerticalCenter />
                        <VerticalEnd />
                    </Row>
                </CardBody>
                <CardFooter className='card-footer'>
                    <FooterTable />
                </CardFooter>
            </Card >
        </Col >
    )
}

export default VerticalAlignment