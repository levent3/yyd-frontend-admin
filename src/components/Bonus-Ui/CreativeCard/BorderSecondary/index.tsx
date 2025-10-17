import CardHead from 'CommonElements/CardHead'
import { BorderStateData } from 'Data/Bonus-Ui/creativCardData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BorderSecondaru = () => {
    const subMenu = [
        {
            text: 'Use the class of',
            code: '.b-l-* '
        },
        {
            text: 'for left border and ',
            code: '.border-3 '
        },
        {
            text: 'is used to increase the width of the border.'
        }
    ]
    return (
        <Col sm={12} xxl={4}>
            <Card className='height-equal'>
                <CardHead title='Border Secondary State' subTitle={subMenu} headClass='border-l-secondary border-2' />
                <CardBody className='scroll-demo'>
                    <ol className="list-group list-group-numbered scroll-rtl">
                        {
                            BorderStateData && BorderStateData.map((item, index) => (
                                <li className="list-group-item d-flex align-items-start flex-wrap" key={index}>
                                    <div className="ms-2 me-auto">{item.text}</div>
                                    <span className={`badge rounded-pill p-2 ${item.class}`}>{item.text2}</span>
                                </li>
                            ))
                        }
                    </ol>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderSecondaru