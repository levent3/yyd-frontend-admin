import CardHead from 'CommonElements/CardHead'
import { BasicTimeLineData } from 'Data/Bonus-Ui/TimeLineData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BasicTimeLine = () => {
    const subMenu = [
        {
            text: 'Use the ',
            code: '.main-basic-timeline '
        },
        {
            text: 'class through made basic timeline.'
        }
    ]
    return (
        <Col xl={6} className=' box-col-6 notification main-timeline'>
            <Card className='height-equal'>
                <CardHead title='Basic Timeline' subTitle={subMenu} />
                <CardBody className='dark-timeline'>
                    <ul>
                        {
                            BasicTimeLineData && BasicTimeLineData.map((item, index) => (
                                <li className="d-flex" key={index}>
                                    <div className={item.class} />
                                    <div className="w-100 ms-3">
                                        <p className="d-flex justify-content-between mb-2">
                                            <span className="date-content light-background">{item.date}</span>
                                            <span>{item.time}</span>
                                        </p>
                                        <h6>{item.title}<span className="dot-notification" /></h6>
                                        <p className="f-light">{item.text}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BasicTimeLine