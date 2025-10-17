import CardHead from 'CommonElements/CardHead'
import { AvatarRatioData } from 'Data/Ui-kits/AvatarData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const AvatarRatio = () => {
    const submenuObj = [
        {
            text: "Give the shape to avatar using ",
            code: '.radio'
        },
        {
            text: ' and',
            code: ' img-* (50/70/80/90/100)'
        },
        {
            text: ' class.'
        }
    ]
    return (
        <Col md={6}>
            <Card className='height-equal'>
                <CardHead title='Ratio' subTitle={submenuObj} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {
                            AvatarRatioData && AvatarRatioData.map((item, index) => (
                                <div className="avatar ratio" key={index}>
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

export default AvatarRatio