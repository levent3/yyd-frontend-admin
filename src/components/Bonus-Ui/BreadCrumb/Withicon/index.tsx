import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { BonusUi, Breadcrumb } from '../../../../../utils/Constant'

const Withicon = () => {
    const subMenu = [
        {
            text: 'You can set icons breadcrumb using ',
            code: '.breadcrumb '
        },
        {
            text: 'class.'
        }
    ]
    return (
        <Col sm={6}>
            <Card>
                <CardHead title='With Icons Breadcrumb' subTitle={subMenu} />
                <CardBody>
                    <ol className="breadcrumb bg-white p-l-0">
                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /></a></li>
                        <li className="breadcrumb-item active">{BonusUi}</li>
                    </ol>
                    <ol className="breadcrumb bg-white m-b-0 p-b-0 p-l-0">
                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /></a></li>
                        <li className="breadcrumb-item">{BonusUi}</li>
                        <li className="breadcrumb-item active">{Breadcrumb}</li>
                    </ol>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Withicon