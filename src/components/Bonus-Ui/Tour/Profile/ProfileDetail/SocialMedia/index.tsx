import Link from 'next/link'
import React from 'react'
import { TourProfileData } from '../../../../../../../Data/Bonus-Ui/TourData'

const SocialMedia = () => {
    return (
        <div className="social-media step4" data-intro="This is your social details">
            <ul className="list-inline">
                {
                    TourProfileData && TourProfileData.map((item, index) => (
                        <li className="list-inline-item" key={index}>
                            <Link href={item.link} target="_blank" rel='noreferrer'>
                                <i className={item.icon} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialMedia