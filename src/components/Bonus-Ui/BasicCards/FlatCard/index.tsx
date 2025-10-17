import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { FlatCardText } from '../../../../../utils/Constant'

const FlatCard = () => {
    const subMenu = [
        {
            text: 'For flat cards, make the',
            code: '.b-r-0[border-radius:0]'
        },
        {
            text: 'used class.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Flat Card' subTitle={subMenu} />
                <CardBody>
                    <p className="mb-0">{FlatCardText}</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FlatCard