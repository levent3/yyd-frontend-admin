import CardHead from 'CommonElements/CardHead'
import { AlertColorData } from 'Data/Ui-kits/AlertData'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const LinkColor = () => {
    const submenuObj = [
        {
            text: "Use the ",
            code: '.alert-link'
        },
        {
            text: ' utility class to quickly provide matching colored links within any alert'
        }
    ]
    return (
        <Col xl={12}>
            <Card>
                <CardHead title='Link Color In Dark Theme' subTitle={submenuObj} />
                <CardBody>
                    <Row>
                        {
                            AlertColorData && AlertColorData.map((item, index) => (
                                <Col xl={6} key={index}>
                                    {
                                        item.data && item.data.map((item, index) => (
                                            <Fragment key={index}>
                                                <p className="mb-0">{item.text}</p>
                                                <div className={`alert dark ${item.class}`} role="alert">
                                                    {item.alertText}
                                                </div>
                                            </Fragment>
                                        ))
                                    }
                                </Col>
                            ))
                        }
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LinkColor