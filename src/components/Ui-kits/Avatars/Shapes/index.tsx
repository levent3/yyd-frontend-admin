import CardHead from 'CommonElements/CardHead'
import { AvatarShapData } from 'Data/Ui-kits/AvatarData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const AvatarShapes = () => {
    const submenuObj = [
        {
            text: "Using the",
            code: '.b-r-* (8/30/35/25)'
        },
        {
            text: ' class you can set the shapes of avatar.'
        }
    ]
    return (
        <Col xl={4} md={6}>
            <Card className='height-equal'>
                <CardHead title='Shapes' subTitle={submenuObj} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {
                            AvatarShapData && AvatarShapData.map((item, index) => (
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

export default AvatarShapes