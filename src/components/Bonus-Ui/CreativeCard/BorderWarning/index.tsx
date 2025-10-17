import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { BorderWarningtext, BorderWarningtext1, BorderWarningtext2, BorderWarningtext3 } from 'utils/Constant'

const BorderWarning = () => {
    const subMenu = [
        {
            text: 'Use the class of',
            code: '.b-l-* '
        },
        {
            text: 'for left border and ',
            code: '.border-3 '
        },
        {
            text: 'is used to increase the width of the border.'
        }
    ]
    return (
        <Col md={6} xxl={4}>
            <Card className='height-equal'>
                <CardHead title='Border Warning State' subTitle={subMenu} headClass='border-l-warning border-3' />
                <CardBody>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item txt-primary fw-bold">{BorderWarningtext}</li>
                        <li className="list-group-item txt-danger fw-bold">{BorderWarningtext1}</li>
                        <li className="list-group-item txt-success fw-bold">{BorderWarningtext2}</li>
                        <li className="list-group-item txt-warning fw-bold">{BorderWarningtext3}</li>
                    </ol>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderWarning