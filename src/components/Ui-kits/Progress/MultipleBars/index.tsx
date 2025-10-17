import CardHead from 'CommonElements/CardHead'
import { MultipleBarData } from 'Data/Ui-kits/ProgressBarData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const MultipleBars = () => {
    const submenuObj = [
        {
            text: 'Include multiple progress bars in a progress component if you need.'
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Multiple bars' subTitle={submenuObj} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {
                                MultipleBarData && MultipleBarData.map((item, index) => (
                                    <div className='progress' key={index}>
                                        {
                                            item.data && item.data.map((item, index) => (
                                                <div className={`progress-bar ${item.class}`} role="progressbar" style={{ width: item.length }} key={index} />
                                            ))
                                        }
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

export default MultipleBars