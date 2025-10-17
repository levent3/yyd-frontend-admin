import CardHead from 'CommonElements/CardHead'
import { CustonListData } from 'Data/Ui-kits/ListData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const CustomList = () => {
    const submenuObj = [
        {
            text: 'Use the ',
            code: '.list-group-item'
        },
        {
            text: ' through make custom design of all lists.'
        }
    ]
    return (
        <Col md={12}>
            <Card>
                <CardHead title='Custom content lists' subTitle={submenuObj} />
                <CardBody>
                    <div className='list-group main-lists-content'>
                        {
                            CustonListData && CustonListData.map((item, index) => (
                                <a className={`list-group-item list-group-item-action ${item.class}`} href="#" key={index}>
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <div className="list-wrapper">
                                            <Image className="list-img" src={`${ImgPath}${item.image}`} alt="profile" width={100} height={100} />
                                            <div className="list-content">
                                                <h6>{item.head}</h6>
                                                <p>{item.mail}</p>
                                            </div>
                                        </div>
                                        <small>{item.span}</small>
                                    </div>
                                    <p className="mb-1">{item.subtext}</p>
                                    <small className={item.class === 'active bg-primary' ? 'text-white' : 'text-muted'}>{item.follower}</small>
                                </a>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CustomList