import CardHead from 'CommonElements/CardHead'
import { AvatarSizeData } from 'Data/Ui-kits/AvatarData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const AvatarSize = () => {
    const submenuObj = [
        {
            text: "You can change the size of avatar using ",
            code: '.img- *  (70/80/90/100)'
        },
        {
            text: ' class.'
        }
    ]
    return (
        <Col xl={4} md={6}>
            <Card className='height-equal'>
                <CardHead title='Sizes' subTitle={submenuObj} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {
                            AvatarSizeData && AvatarSizeData.map((item, index) => (
                                <div key={index} className="avatar">
                                    <Image className={item.class} src={`${ImgPath}/${item.image}`} alt="#" width={100} height={100} />
                                </div>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AvatarSize