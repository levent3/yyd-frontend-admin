import { DemoModalData } from 'Data/Ui-kits/ModalData';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { BrooklynSimmons, brooklysimmons } from 'utils/Constant';
import BgImage from './BgImage';

const Modal1Body = () => {
    return (
        <Col xl={12}>
            <Card className="social-profile mb-0">
                <CardBody>
                    <BgImage />
                    <div className="social-details">
                        <h5 className="mb-1">
                            <a href="social-app.html">{BrooklynSimmons}</a>
                        </h5>
                        <span className="f-light">{brooklysimmons}</span>
                        <ul className="social-follow">
                            {
                                DemoModalData && DemoModalData.map((item, index) => (
                                    <li key={index}>
                                        <h5 className="mb-0">{item.class}</h5>
                                        <span className="f-light">{item.text}</span>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Modal1Body