import React from 'react'
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap'
import { Horizontaltext } from 'utils/Constant'

const HorizontalDemo = ({ open }: { open: boolean }) => {
    return (
        <Row>
            <Col sm={5}>
                <Collapse className={`mt-3 ${open && 'show'}`} horizontal>
                    <Card>
                        <CardBody className='bg-secondary-light accordion-h-space mb-0'>
                            {Horizontaltext}
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    )
}

export default HorizontalDemo