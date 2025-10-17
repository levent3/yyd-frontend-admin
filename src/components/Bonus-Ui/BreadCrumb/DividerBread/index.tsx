import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { Home, Progress, UIKits } from '../../../../../utils/Constant'

const DividerBread = () => {
    const subMenu = [
        {
            text: 'You can set breadcrumb using ',
            code: '.breadcrumb-icon'
        },
        {
            text: ' class.'
        }
    ]
    return (
        <Col sm={6}>
            <Card>
                <CardHead title='Divider Breadcrumb' subTitle={subMenu} />
                <CardBody>
                    <nav className="breadcrumb breadcrumb-icon">
                        <a className="breadcrumb-item" href="#">{Home}</a>
                        <span className="breadcrumb-item active">{UIKits}</span>
                    </nav>
                    <nav className="breadcrumb breadcrumb-icon m-0">
                        <a className="breadcrumb-item" href="#">{Home}</a>
                        <a className="breadcrumb-item" href="#">{UIKits}</a>
                        <span className="breadcrumb-item active">{Progress}</span>
                    </nav>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DividerBread