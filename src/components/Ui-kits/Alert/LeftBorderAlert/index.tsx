import CardHead from 'CommonElements/CardHead'
import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { LeftBarText } from 'utils/Constant'

const LeftBorderAlert = () => {
    const [active, setActive] = useState<boolean>(true);
    const submenuObj = [
        {
            text: "Use the ",
            code: '.border-left-wrapper '
        },
        {
            text: 'to change border-left radius.'
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Left Border Alert' subTitle={submenuObj} />
                <CardBody className='live-dark'>
                    <div className={`alert alert-light-dark light alert-dismissible fade text-dark border-left-wrapper ${active ? 'show' : 'd-none'}`} role="alert">
                        <FeatherIconCom iconName='HelpCircle' />
                        <p>{LeftBarText}</p>
                        <Button color='transperant' className="btn-close" type="button" onClick={() => { setActive(false) }} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LeftBorderAlert