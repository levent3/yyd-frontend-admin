import CardHead from 'CommonElements/CardHead'
import { BorderSideColorData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BorderColorComponent = () => {
    const submenuObj = [
        {
            text: "Use the ",
            code: '.b-*/.b-t-*/.b-b-*/.b-l-*/.b-r-*'
        },
        {
            text: 'class for borders.'
        }
    ]
    return (
        <Col xs={12}>
            <Card>
                <CardHead title='Border Color' subTitle={submenuObj} />
                <CardBody>
                    <div className='gradient-border'>
                        {
                            BorderSideColorData && BorderSideColorData.map((item, index) => (
                                <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                                    <div className={`helper-box ${item.class} border fill-wrapper`} /><span>{item.text}</span>
                                </div>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderColorComponent