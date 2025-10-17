import CardHead from 'CommonElements/CardHead'
import { FontStyleData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontStyle = () => {
    const submenuObj = [
        {
            text: "Use the font-style like: ",
            code: ' .f-s-* [normal/italic/oblique/initial/inherit]'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CardHead title='Font-Style' subTitle={submenuObj} />
                <CardBody>
                    {
                        FontStyleData && FontStyleData.map((item, index) => (
                            <p className={item.class} key={index}>{item.text}</p>
                        ))
                    }
                </CardBody>
            </Card>
        </Col>
    )
}

export default FontStyle