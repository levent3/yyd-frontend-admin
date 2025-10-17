import CardHead from 'CommonElements/CardHead'
import { AdditionalAlertData } from 'Data/Ui-kits/AlertData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const AdditionalAlert = () => {
    const submenuObj = [
        {
            text: "Use the ",
            code: '.alert'
        },
        {
            text: ' utility class to quickly provide additional content within any alerts.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Additional content' subTitle={submenuObj} />
                <CardBody className='dark-alert'>
                    {
                        AdditionalAlertData && AdditionalAlertData.map((item, index) => (
                            <div className={`alert ${item.class}`} role="alert" key={index}>
                                <h5 className={`alert-heading pb-2 ${item.headclass}`} >{item.head}</h5>
                                <p>{item.text}</p>
                                <hr />
                                <p className="mb-0">{item.subtext}</p>
                            </div>
                        ))
                    }
                </CardBody>
            </Card >
        </Col >
    )
}

export default AdditionalAlert