import React from 'react'
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap'
import { Collapes1Text, Collapes2Text } from 'utils/Constant'

type propsType = {
    collapesId: { collapes1: boolean, collapes2: boolean }
}

const CollapesBody = ({ collapesId }: propsType) => {
    return (
        <Row>
            <Col xl={6}>
                <Collapse className={`multi-collapse dark-accordion ${collapesId.collapes1 && 'show'}`}>
                    <Card className='mt-3 mb-0'>
                        <CardBody className="collapse-wrapper accordion-light-primary rounded-4">{Collapes1Text}</CardBody>
                    </Card>
                </Collapse>
            </Col>
            <Col xl={6}>
                <Collapse className={`multi-collapse dark-accordion ${collapesId.collapes2 && 'show'}`}>
                    <Card className='mt-3 mb-0'>
                        <CardBody className="collapse-wrapper accordion-light-warning rounded-4">{Collapes2Text}</CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    )
}

export default CollapesBody