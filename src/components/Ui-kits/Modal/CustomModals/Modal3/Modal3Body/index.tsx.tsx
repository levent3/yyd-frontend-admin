import SvgIcon from 'CommonElements/Icons/SvgIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath, YourBalance } from 'utils/Constant'
import Investment from './Investment'
import CashBack from './CashBack'

const Modal3Body = () => {
    return (
        <Col xl={12}>
            <Card className="balance-box mb-0">
                <CardBody>
                    <div className="balance-profile">
                        <div className="balance-img">
                            <Image src={`${ImgPath}/dashboard-4/user.png`} alt="user vector" width={64} height={64} />
                            <Link href={'user-profile.html'} className='edit-icon'>
                                <SvgIcon iconId='pencil' />
                            </Link>
                        </div>
                        <span className="f-light d-block">{YourBalance}</span>
                        <h5 className="mt-1">$768,987.90</h5>
                        <ul>
                            <Investment />
                            <CashBack />
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>

    )
}

export default Modal3Body