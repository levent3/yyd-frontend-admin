import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { AbsoluteCard, AbsolutePrimarytext, ImgPath } from 'utils/Constant'

const AbsolutePrimary = () => {
    return (
        <Col sm={12} xl={6}>
            <Card className='card-absolute'>
                <CardHeader className='bg-primary'>
                    <h5 className="txt-light">{AbsoluteCard}</h5>
                </CardHeader>
                <CardBody>
                    <div className="d-flex list-behavior-1 align-items-center">
                        <div className="flex-shrink-0">
                            <img className="tab-img img-fluid" src={`${ImgPath}/blog/img.png`} alt="home" />
                        </div>
                        <div className="flex-grow-1">
                            <p className="mb-xl-0 mb-sm-4">{AbsolutePrimarytext}</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AbsolutePrimary