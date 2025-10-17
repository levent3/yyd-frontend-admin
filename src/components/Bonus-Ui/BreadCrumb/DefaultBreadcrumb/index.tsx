import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { Alert, Home, UIKits } from '../../../../../utils/Constant'

const DefaultBreadcrumb = () => {
    const subMenu = [
        {
            text: 'You can set breadcrumb using ',
            code: '.breadcrumb '
        },
        {
            text: ' class.'
        }
    ]
    return (
        <Col sm={6}>
            <Card className='height-equal'>
                <CardHead title='Default Breadcrumb' subTitle={subMenu} />
                <CardBody>
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="#">{Home}</a>
                        <span className="breadcrumb-item active">{UIKits}</span>
                    </nav>
                    <nav className="breadcrumb m-0">
                        <a className="breadcrumb-item" href="#">{Home}</a>
                        <a className="breadcrumb-item" href="#">{UIKits}</a>
                        <span className="breadcrumb-item active">{Alert}</span>
                    </nav>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DefaultBreadcrumb