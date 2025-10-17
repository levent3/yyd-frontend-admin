import { SocialProfileStatus } from 'Data/Dashboard/Social'
import Link from 'next/link'
import React from 'react'
import { BrooklynSimmons, BrooklynSimmonsEmail } from 'utils/Constant'

const SocialDetail = () => {
    return (
        <div className='social-details'>
            <h5 className='mb-1'>
                <Link href={`/app/social-app`}>{BrooklynSimmons}</Link>
            </h5>
            <span className='f-light'>{BrooklynSimmonsEmail}</span>
            <ul className='social-follow' >
                {SocialProfileStatus.map((item, i) => (
                    <li key={i}>
                        <h5 className='mb-0'>{item.active}</h5>
                        <span className='f-light'>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialDetail