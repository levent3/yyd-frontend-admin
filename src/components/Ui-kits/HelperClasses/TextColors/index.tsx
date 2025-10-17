import CardHead from 'CommonElements/CardHead'
import { TextColorsData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TextColors = () => {
    const submenuObj = [
        {
            text: "Use the text color for ",
            code: '.font-*'
        },
        {
            text: " class.",
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Text Colors' subTitle={submenuObj} />
                <CardBody>
                    {
                        TextColorsData && TextColorsData.map((item, index) => (
                            <div key={index}>
                                <div className="d-flex align-items-center mb-2 gap-2" key={index}></div>
                                <div className={`${item.class}`}>{item.text}</div>
                            </div>
                        ))
                    }
                </CardBody>
            </Card>
        </Col>
    )
}

export default TextColors