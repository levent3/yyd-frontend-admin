import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { BorderBottomText } from 'utils/Constant'

const BorderBottom = () => {
    const subMenu = [
        {
            text: 'Use the class of',
            code: '.b-b-* '
        },
        {
            text: 'for bottom border.'
        }
    ]
    return (
        <Col md={6} xs={12}>
            <Card>
                <CardHead title='Border Bottom' subTitle={subMenu} headClass='border-b-info' />
                <CardBody>
                    <p className="mb-0">{BorderBottomText}</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderBottom