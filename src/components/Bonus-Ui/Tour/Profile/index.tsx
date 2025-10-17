import Image from 'next/image'
import React from 'react'
import { Card, Col } from 'reactstrap'
import ProfileDetail from './ProfileDetail'
import { ImgPath } from 'utils/Constant'
import { useRouter } from 'next/router'

const Profile = () => {
      const router = useRouter();
    return (
        <Col sm={12}>
            <Card className='hovercard text-center' >
                <div className="cardheader" />
                <div className="user-image">
                    <div className="avatar">
                        <Image src={`${ImgPath}/user/7.jpg`} width={100} height={100} className='step1' data-intro="This is cuba profile" alt='profile' />
                    </div>
                    <div className="icon-wrapper">
                        <i onClick={() => router.push("/app/users/edit")} className="icofont icofont-pencil-alt-5 step2" data-intro="Change cuba profile image here" />
                    </div>
                </div>
                <ProfileDetail />
            </Card >
        </Col >
    )
}

export default Profile