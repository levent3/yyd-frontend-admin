import CardHead from 'CommonElements/CardHead'
import { ProfileScrollData } from 'Data/Bonus-Ui/ScrollableData'
import Image from 'next/image'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const ProfileScroll = () => {
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
                <CardHead title='Profile Scrollable' subTitle={submenuObj} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo scroll-b-none' style={{ width: '100%', height: 300 }}>
                        <div className="list-group">
                            {
                                ProfileScrollData && ProfileScrollData.map((item, index) => (
                                    <a className="list-group-item list-group-item-action list-hover-primary" href="#" key={index}>
                                        <Image className="rounded-circle" src={`${ImgPath}${item.img}`} alt="user" width={100} height={100} />{item.text}
                                    </a>
                                ))
                            }
                        </div>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProfileScroll