import CardHead from 'CommonElements/CardHead'
import { ScrollableContentData } from 'Data/Bonus-Ui/ScrollableData'
import Image from 'next/image'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const ScrollableContent = () => {
    const submenuObj = [
        {
            text: "Use the ",
            code: '.list-group-item '
        },
        {
            text: 'through made profile and with used ',
            code: '.vertical-scroll.'
        }
    ]
    return (
        <Col xxl={4} md={12}>
            <Card>
                <CardHead title='Scrollable Content' subTitle={submenuObj} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo scroll-b-none' style={{ width: '100%', height: 300 }}>
                        <div className='list-group main-lists-content'>
                            {
                                ScrollableContentData && ScrollableContentData.map((item, index) => (
                                    <a className={`list-group-item list-group-item-action list-hover-primary ${index === 0 && 'active'}`} href="#" key={index}>
                                        <div className="list-wrapper gap-0">
                                            <Image className="list-img" src={`${ImgPath}${item.img}`} alt="profile" width={100} height={100} />
                                            <div className="list-content">
                                                <h6>{item.head}</h6>
                                                <p>{item.mail}</p>
                                                {index === 0 ? <small>{item.small}</small> : <small className='text-muted'>{item.small}</small>}
                                            </div>
                                        </div>
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

export default ScrollableContent