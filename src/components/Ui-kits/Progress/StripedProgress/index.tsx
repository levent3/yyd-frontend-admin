import CardHead from 'CommonElements/CardHead'
import { StripedProgressData } from 'Data/Ui-kits/ProgressBarData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { ProgressStriped } from 'utils/Constant'

const StripedProgress = () => {
    const submenuObj = [
        {
            text: 'Add ',
            code: '.progress-bar-striped'
        },
        {
            text: ' to any ',
            code: '.progress-bar '
        },
        {
            text: " to apply a stripe via CSS gradient over the progress bar's background color Using CSS Effects."
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title={ProgressStriped} subTitle={submenuObj} />
                <CardBody className='body progress-showcase'>
                    <Row>
                        <Col>
                            {
                                StripedProgressData && StripedProgressData.map((item, index) => (
                                    <div className="progress" key={index}>
                                        <div className={`progress-bar progress-bar-striped ${item.class}`} role="progressbar" style={{ width: item.length }} />
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

export default StripedProgress