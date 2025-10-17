import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { BasicTables, Bootstrapgt, Homegt, Tablesgt } from '../../../../../utils/Constant'

const Variation = () => {
    const subMenu = [
        {
            text: 'You can set variations breadcrumb using ',
            code: '.breadcrumb '
        },
        {
            text: 'class through any icons sets.'
        }
    ]
    return (
        <Col sm={6}>
            <Card className="height-equal">
                <CardHead title='Variation Of Breadcrumb' subTitle={subMenu} />
                <CardBody>
                    <nav className="breadcrumb breadcrumb-no-divider mb-0 gap-2">
                        <a className="breadcrumb-item mb-1 mb-xl-0" href="#">{Homegt}</a>
                        <a className="breadcrumb-item ps-0 mb-1 mb-xl-0" href="#">{Tablesgt}</a>
                        <a className="breadcrumb-item ps-0 mb-1 mb-xl-0" href="#">{Bootstrapgt}</a>
                        <span className="breadcrumb-item active ps-0">{BasicTables}</span>
                    </nav>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Variation