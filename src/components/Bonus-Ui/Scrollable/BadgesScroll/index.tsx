import CardHead from 'CommonElements/CardHead'
import { BadgeScrollData } from 'Data/Bonus-Ui/ScrollableData'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { Card, CardBody, Col } from 'reactstrap'

const BadgesScroll = () => {
    const submenuObj = [
        {
            text: "Use the",
            code: '.badge '
        },
        {
            text: ' class through create more badges and ',
            code: '.vertical-scroll '
        },
        {
            text: 'used as vertical scroll. '
        }
    ]
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CardHead title='Badges Scrollbar' subTitle={submenuObj} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo scroll-b-none' style={{ width: '100%', height: 300 }}>
                        <ol className="list-group list-group-numbered scroll-rtl">
                            {
                                BadgeScrollData && BadgeScrollData.map((item, index) => (
                                    <li className={`list-group-item d-flex align-items-start flex-wrap ${index === BadgeScrollData.length - 1 && 'justify-content-between'}`} key={index}>
                                        <div className="ms-2 me-auto">{item.text}</div>
                                        <span className={`badge rounded-pill p-2 ${item.class}`}>{item.badge}</span>
                                    </li>
                                ))
                            }
                        </ol>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BadgesScroll