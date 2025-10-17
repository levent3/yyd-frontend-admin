import CardHead from 'CommonElements/CardHead'
import { CustomHeightData } from 'Data/Ui-kits/ProgressBarData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const CustomHeightProgress = () => {
    const submenuObj = [
        {
            text: 'Set a height value on the ',
            code: '.progress-bar'
        },
        {
            text: ', so if you change that value the outer',
            code: '.progress'
        },
        {
            text: ' will automatically resize accordingly.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Custom Height Progress Bars' subTitle={submenuObj} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {
                                CustomHeightData && CustomHeightData.map((item, index) => (
                                    <div className="progress" style={{ height: item.text }} key={index}>
                                        <div className={`progress-bar ${item.class}`} role="progressbar" style={{ width: item.length }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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

export default CustomHeightProgress