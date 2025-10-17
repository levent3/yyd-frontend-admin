import { TourProfileData } from 'Data/Bonus-Ui/TourData'
import Link from 'next/link'
import React from 'react'
import { Col } from 'reactstrap'

const SocialIcon = ({ activeTime }: { activeTime: string }) => {
    return (
        <Col sm={4} className="align-self-center mt-0 text-end step6">
            <div className="social-media social-tour" data-intro="This is your social details">
                <ul className="list-inline">
                    {
                        TourProfileData && TourProfileData.map((item, index) => (
                            <li className="list-inline-item" key={index}>
                                <Link href={item.icon} target="_blank">
                                    <i className={item.icon} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="float-sm-end">
                    <small>{activeTime}</small>
                </div>
            </div>
        </Col>
    )
}

export default SocialIcon