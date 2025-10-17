import CardHead from 'CommonElements/CardHead'
import { AvatarStatusData } from 'Data/Ui-kits/AvatarData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const AvatarStatus = () => {
    const submenuObj = [
        {
            text: "Using ",
            code: ' .status-* (online/offline/dnd)'
        },
        {
            text: ' class you can set the status of avatar.'
        }
    ]
    return (
        <Col xl={4} md={6}>
            <Card className='height-equal'>
                <CardHead title='Status Indicator' subTitle={submenuObj} />
                <CardBody className='avatar-showcase'>
                    <div className='avatars'>
                        {
                            AvatarStatusData && AvatarStatusData.map((item, index) => (
                                <div className="avatar" key={index}>
                                    <Image className={item.class} src={`${ImgPath}/${item.image}`} alt="#" width={100} height={100} />
                                    <div className={`status ${item.status}`} />
                                </div>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AvatarStatus