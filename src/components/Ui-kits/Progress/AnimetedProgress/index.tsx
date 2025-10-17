import CardHead from 'CommonElements/CardHead'
import { StripedProgressData } from 'Data/Ui-kits/ProgressBarData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Progressanimated } from 'utils/Constant'

const AnimetedProgress = () => {
    const submenuObj = [
        {
            text: 'The striped gradient can also be animated. Add ',
            code: '.progress-bar-animated'
        },
        {
            text: ' to',
            code: '.progress-bar'
        },
        {
            text: " to animate the stripes right to left via CSS3 animations."
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title={Progressanimated} subTitle={submenuObj} />
                <CardBody className=' progress-showcase'>
                    <Row>
                        <Col>
                            {
                                StripedProgressData && StripedProgressData.map((item, index) => (
                                    <div className="progress" key={index}>
                                        <div className={`progress-bar-animated progress-bar-striped ${item.class}`} role="progressbar" style={{ width: item.length }} />
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

export default AnimetedProgress