import React from 'react'
import { CardBody } from 'reactstrap'
import { DarkBodytext } from '../../../../../../utils/Constant'
import BodyImg from '/public/assets/images/dashboard-2/headphones.png';
import Image from 'next/image';

const DarkCardBody = () => {
    return (
        <CardBody className='bg-dark'>
            <div className="d-flex align-items-center gap-3 pills-blogger">
                <div className="blog-wrapper">
                    <Image className="blog-img" src={BodyImg} alt="head-phone" />
                </div>
                <div className="blog-content">{DarkBodytext}</div>
            </div>
        </CardBody>
    )
}

export default DarkCardBody