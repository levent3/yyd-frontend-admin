import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { LiveAlertText, Showlivealert } from 'utils/Constant';

const LiveAlert = () => {
    const [data, setData] = useState<number[]>([])

    const RemoveValue = (item: number) => {
        setData(data.filter((value, index) => {
            return value !== item;
        }));
    }
    const submenuObj = [
        {
            text: "Click the button below to show an alert,then dismiss it with the built-in close button."
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Live Alert' subTitle={submenuObj} />
                <CardBody className='live-dark'>
                    {
                        data.map((item, index: number) => (
                            <div className='alert alert-light-dark txt-dark mb-3 alert-dismissible' role="alert" key={index}>
                                <div>{LiveAlertText}</div>
                                <Button color='transperant' type="button" className="btn-close" onClick={() => { RemoveValue(item) }} />
                            </div>
                        ))
                    }
                    <Button color='dark' onClick={() => { setData((pre) => [...pre, pre.length + 1]) }}>{Showlivealert}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LiveAlert