import CardHead from 'CommonElements/CardHead'
import { BasicProgressData } from 'Data/Ui-kits/ProgressBarData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { BasicProgressBars } from 'utils/Constant'

const BasicProgress = () => {
    const submenuObj = [
        {
            text: 'Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We use the ',
            code: '.progress '
        },
        {
            text: 'as a wrapper to indicate the max value of the progress bar. The ',
            code: '.progress-bar '
        },
        {
            text: 'requires an inline style, utility class, or custom CSS to set their width.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title={BasicProgressBars} subTitle={submenuObj} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {
                                BasicProgressData && BasicProgressData.map((item, index) => (
                                    <div className="progress" key={index}>
                                        <div className={`progress-bar ${item.class}`} role="progressbar" style={{ width: item.length }}>{item.length}</div>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}

export default BasicProgress