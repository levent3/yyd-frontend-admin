import React from 'react'
import { Col } from 'reactstrap'
import { WebDesigner, WilliamJennings } from '../../../../../../../utils/Constant'
import Link from 'next/link'

const ProfileName = () => {
    return (
        <Col sm={12} xl={4} className="order-sm-0 order-xl-1">
            < div className="user-designation tour-email">
                <div className="title">
                    <Link href='/bonus-ui/tour' target='_blank'> {WilliamJennings} </Link>
                </div>
                <div className="desc mt-2"> {WebDesigner}</div>
            </div >
        </Col >
    )
}

export default ProfileName