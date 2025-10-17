import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonProfileHead from '../CommonProfile'
import Image from 'next/image'
import SidebarImg from 'public/assets/images/other-images/sidebar-bg.jpg'
import Link from 'next/link'
import { TextDetail } from 'utils/Constant'
import ProfileLike from '../CommonProfile/ProfileLike'

const DetailImg = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <CommonProfileHead time='5 min read' activeTime='2 Yours ago' month='02 Feb' /><hr />
                    <Row>
                        <Col lg={12} xl={4}>
                            <div className='step8'>
                                <Link href="#">
                                    <Image className="img-fluid rounded" src={SidebarImg} alt="nature" />
                                </Link>
                            </div>
                            <ProfileLike />
                        </Col>
                        <Col xl={6}>
                            <p className="block-ellipsis pt-xl-0 pt-3">{TextDetail}</p>
                        </Col>
                    </Row>
                </div>
            </Card >
        </Col >

    )
}

export default DetailImg