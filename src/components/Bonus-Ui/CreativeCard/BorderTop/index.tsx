import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { BorderTopText } from 'utils/Constant'

const BorderTop = () => {
    const subMenu = [
        {
            text: 'Use the class of',
            code: '.b-t-* '
        },
        {
            text: 'for top border.'
        }
    ]
    return (
        <Col md={6} xs={12}>
            <Card>
                <CardHead title='Border Top' subTitle={subMenu} headClass='border-t-danger' />
                <CardBody>
                    <p className="mb-0">{BorderTopText}</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderTop