import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'

const ProgressWithNumber = () => {
    const submenuObj = [
        {
            text: 'Use the ',
            code: '.position-absolute '
        },
        {
            text: 'to set progress numbers steps.'
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Progress With Number Steps' subTitle={submenuObj} />
                <CardBody>
                    <div className="position-relative m-3 progress-number">
                        <div className="progress progress-wrapper">
                            <div className="progress-bar" role="progressbar" aria-label="Progress" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}/>
                        </div>
                        <Button color="primary"  className="position-absolute top-0 start-0 translate-middle btn-sm  rounded-circle">1</Button>
                        <Button color="primary"  className="position-absolute top-0 start-50 translate-middle btn-sm  rounded-circle">2</Button>
                        <Button color="transparent"  className="progress-btn position-absolute top-0 start-100 translate-middle btn-sm rounded-circle">3</Button>
                    </div>
        </CardBody>
            </Card>
        </Col>
    )
}

export default ProgressWithNumber