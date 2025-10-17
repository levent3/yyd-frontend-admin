import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Level1col3, Level2col4 } from 'utils/Constant'
import NestingLevel2 from './NestingLevel2'
import NestingLevel3 from './NestingLevel3'

const Nesting = () => {
    const submenuObj = [
        {
            text: 'To nest your content with the default grid, add a new',
            code: '.row'
        },
        {
            text: ' and set of ',
            code: '.col-sm-*'
        },
        {
            text: ' columns within an existing ',
            code: '.col-sm-*'
        },
        {
            text: '  column.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Nesting' subTitle={submenuObj} />
                <CardBody className='grid-showcase'>
                    <Row className='g-3'>
                        <Col xs={3}>
                            <span>{Level1col3}</span>
                        </Col>
                        <NestingLevel2 />
                        <NestingLevel3 />
                        <Col xs={4}>
                            <span>{Level2col4}</span>
                        </Col>
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}

export default Nesting