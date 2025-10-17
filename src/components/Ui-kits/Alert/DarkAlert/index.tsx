import CardHead from 'CommonElements/CardHead'
import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { DarkAlertText } from 'utils/Constant'

const DarkAlert = () => {
    const [active, setActive] = useState<boolean>(true);
    const submenuObj = [
        {
            text: "Use the ",
            code: '.alert-dismissible'
        },
        {
            text: ' utility class to quickly remove the alerts.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal' >
                <CardHead title='Dismissing Dark Alerts' subTitle={submenuObj} />
                <CardBody>
                    <div className={`alert alert-secondary dark alert-dismissible fade ${active ? 'show' : 'd-none'}`} role="alert">
                        <FeatherIconCom iconName='Heart' />
                        <p>{DarkAlertText}</p>
                        <Button color='transperant' className="btn-close" type="button" onClick={() => { setActive(false) }} />
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default DarkAlert