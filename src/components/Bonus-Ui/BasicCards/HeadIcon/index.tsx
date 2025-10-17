import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { IconHeadtext, IconHeadtext2, IconInHeading, ImgPath } from '../../../../../utils/Constant'

const Headicon = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHeader>
                    <h4><i className="icofont icofont-library me-2" />{IconInHeading}</h4>
                    <p className="f-m-light mt-1">{IconHeadtext}</p>
                </CardHeader>
                <CardBody>
                    <div className="d-flex gap-3 align-items-center list-behavior-1">
                        <div className="flex-shrink-0">
                            <img className="tab-img img-fluid" src={`${ImgPath}/blog/img.png`} alt="home" />
                        </div>
                        <div className="flex-grow-1 ms-0">{IconHeadtext2}</div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Headicon