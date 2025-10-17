import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Mediumbold, bold, bolder, fw300, fw400, fw500, fw600, fw700, lightfont, normalfont } from 'utils/Constant'

const FontWeight = () => {
    const submenuObj = [
        {
            text: "Using ",
            code: 'f-w-*'
        },
        {
            text: ' class, you can change the font weight.'
        }
    ]
    return (
        <Col xs={12}>
            <Card>
                <CardHead title='Font Weight' subTitle={submenuObj} />
                <CardBody className='d-flex flex-column gap-3'>
                    <h1 className="f-w-700">{bolder}<code> {fw700}</code></h1>
                    <h2 className="f-w-600">{bold}<code> {fw600}</code></h2>
                    <h3 className="f-w-500">{Mediumbold}<code> {fw500}</code></h3>
                    <h4 className="f-w-400">{normalfont}<code> {fw400}</code></h4>
                    <h5 className="f-w-300">{lightfont}<code> {fw300}</code></h5>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FontWeight