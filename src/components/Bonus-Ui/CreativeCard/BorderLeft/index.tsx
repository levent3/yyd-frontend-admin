import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { BorderleftText } from 'utils/Constant'

const Borderleft = () => {
    const subMenu = [
        {
            text: 'Use the class of',
            code: '.b-l-* '
        },
        {
            text: 'for left border.'
        }
    ]
    return (
        <Col md={6} xs={12}>
            <Card>
                <CardHead title='Border Left' subTitle={subMenu} headClass='border-l-primary' />
                <CardBody>
                    <p>{BorderleftText}</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Borderleft