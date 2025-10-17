import CardHead from 'CommonElements/CardHead'
import { SmallProgressData } from 'Data/Ui-kits/ProgressBarData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const SmallProgress = () => {
    const submenuObj = [
        {
            text: 'Use ',
            code: ' .sm-progress-bar'
        },
        {
            text: '  class to change progress size to small:'
        }
    ]
    return (
        <Col xl={6}>
            <Card className="height-equal" style={{minHeight:"338.609px"}}>
                <CardHead title='Small Progress Bars' subTitle={submenuObj} />
                <CardBody className='progress-showcase progress-b-space'>
                    <Row>
                        <Col>
                            {
                                SmallProgressData && SmallProgressData.map((item, index) => (
                                    <div className="progress sm-progress-bar overflow-visible mt-4" key={index}>
                                        <div className="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped" role="progressbar" style={{ width: item.length }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                            <span className="txt-primary progress-label">{item.text}</span>
                                            <span className="animate-circle" />
                                        </div>
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

export default SmallProgress