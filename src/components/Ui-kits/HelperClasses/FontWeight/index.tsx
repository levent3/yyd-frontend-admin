import CardHead from 'CommonElements/CardHead'
import { FontWeightData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontWeight = () => {
    const submenuObj = [
        {
            text: "Use the font-weight classes like: ",
            code: '.f-w-* [100/300/400/600/700/900]'
        }
    ]
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CardHead title='Font Weight' subTitle={submenuObj} />
                <CardBody>
                    {
                        FontWeightData && FontWeightData.map((item, index) => (
                            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                                <div className={`${item.class}`}><span>{item.text}</span></div>
                            </div>
                        ))
                    }
                </CardBody>
            </Card>
        </Col>
    )
}

export default FontWeight