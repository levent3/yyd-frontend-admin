import CardHead from 'CommonElements/CardHead'
import { FontSizeData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontSize = () => {
    const submenuObj = [
        {
            text: "Use the font-size for ",
            code: '.f-* [14/16/18/20/22/24/26/28/30/32/34/36/38/40]'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col xs={12}>
            <Card>
                <CardHead title='Font Sizes' subTitle={submenuObj} />
                <CardBody>
                    <div className='gradient-border'>
                        {
                            FontSizeData && FontSizeData.map((item, index) => (
                                <div className="font-wrapper border" key={index}>
                                    <div className={`${item.class}`}><span>{item.text}</span></div>
                                </div>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FontSize