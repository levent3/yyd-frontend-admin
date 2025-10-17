import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import Image from 'next/image'
import { ImgPath, ShadowCardText } from '../../../../../utils/Constant'

const WithoutShadow = () => {
    const subMenu = [
        {
            text: 'Use the',
            code: '.shadow-none '
        },
        {
            text: '&',
            code: '.border '
        },
        {
            text: 'class through shadow removes.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card className='shadow-none border'>
                <CardHead title='Without shadow Card' subTitle={subMenu} />
                <CardBody>
                    <div className="flex-space flex-wrap align-items-center">
                        <Image className="tab-img" src={`${ImgPath}/avtar/3.jpg`} alt="profile" width={100} height={100} />
                        <p>{ShadowCardText}</p>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default WithoutShadow