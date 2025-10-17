import CardHead from 'CommonElements/CardHead'
import { LargeProgressData } from 'Data/Ui-kits/ProgressBarData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const LargeProgress = () => {
    const submenuObj = [
        {
            text: 'Use ',
            code: ' .lg-progress-bar'
        },
        {
            text: '  class to change progress size to large:'
        }
    ]
    return (
        <Col xl={6}>
            <Card className="height-equal" style={{minHeight:"338.609px"}}>
                <CardHead title='Large Progress Bars' subTitle={submenuObj} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {
                                LargeProgressData && LargeProgressData.map((item, index) => (
                                    <div className="progress lg-progress-bar" key={index}>
                                        <div className={`progress-bar ${item.class}`} role="progressbar" style={{ width: item.length }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{item.length}</div>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LargeProgress