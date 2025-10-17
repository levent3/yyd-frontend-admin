import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import BgInfo from './BgInfo'
import BgWarning from './BgWarning'
import BgDanger from './BgDanger'

const ColoredBread = () => {
    const subMenu = [
        {
            text: 'You can set breadcrumb using ',
            code: '.breadcrumb '
        },
        {
            text: ' class and set background colors like ',
            code: '[.bg-*].'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Colored Breadcrumb' subTitle={subMenu} />
                <CardBody>
                    <BgInfo />
                    <BgWarning />
                    <BgDanger />
                </CardBody>
            </Card>
        </Col>
    )
}

export default ColoredBread