import CardHead from 'CommonElements/CardHead'
import { ScrollableListData } from 'Data/Ui-kits/ListData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const ScrollableList = () => {
    const submenuObj = [
        {
            text: 'Use the property ',
            code: 'overflow:auto '
        },
        {
            text: 'through scrollable lists.'
        }
    ]
    return (
        <Col xxl={4}>
            <Card>
                <CardHead title='Scrollable lists' subTitle={submenuObj} />
                <CardBody>
                    <div className='list-group main-lists-content scrollbar-wrapper'>
                        {
                            ScrollableListData && ScrollableListData.map((item, index) => (
                                <a className={`list-group-item list-group-item-action list-hover-primary ${index === 0 && 'active'}`} href="#" key={index}>
                                    <div className="list-wrapper gap-0">
                                        <Image className="list-img" src={`${ImgPath}${item.img}`} alt="profile" width={100} height={100} />
                                        <div className="list-content">
                                            <h6>{item.head}</h6>
                                            <p>{item.mail}</p>
                                            {index === 0 ? <small>{item.small}</small> : <small className='text-muted' >{item.small}</small>}
                                        </div>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ScrollableList