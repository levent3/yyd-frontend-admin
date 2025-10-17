import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Buy, ImgPath, PrimiumFeatures, ProAccount, PurchaseNow } from 'utils/Constant'

const PreAccountCard = () => {
    return (
        <Col xxl={3} md={6} className='box-col-6 col-ed-none wow zoomIn'>
            <Card className='purchase-card'>
                <img className='img-fluid' src={`${ImgPath}/dashboard/purchase.png`} alt='vector mens with leptop' />
                <CardBody className='pt-3'>
                    <h6 className='mb-3'>
                        {Buy} <a href='#'>{ProAccount} </a>{PrimiumFeatures}
                    </h6>
                    <Link className='purchase-btn btn btn-primary btn-hover-effect f-w-500' href='https://1.envato.market/3GVzd' target='_blank'>
                        {PurchaseNow}
                    </Link>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PreAccountCard