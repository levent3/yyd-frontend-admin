import CardHead from 'CommonElements/CardHead'
import { CustomProgressData } from 'Data/Ui-kits/ProgressBarData'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const CustomProgress = () => {
    const submenuObj = [
        {
            text: 'Use the ',
            code: '.progress-bar-animated '
        },
        {
            text: 'and ',
            code: '.progress-bar-striped '
        },
        {
            text: 'to animate the stripes right to left.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Custom Progress Bars' subTitle={submenuObj} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {
                                CustomProgressData && CustomProgressData.map((item, index) => (
                                    <Fragment key={index}>
                                        <h6 className="mb-2">{item.text} </h6>
                                        <div className="progress mb-4">
                                            <div className={`progress-bar-animated progress-bar-striped text-center ${item.class}`} role="progressbar" style={{ width: item.length }}>{item.length !== '0' ? item.length : ''}</div>
                                        </div>
                                    </Fragment>
                                ))
                            }
                        </Col>
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}

export default CustomProgress