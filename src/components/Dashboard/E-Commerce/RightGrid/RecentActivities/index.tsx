import { RecentActivityData } from 'Data/Dashboard/E-commerceData'
import React from 'react'
import { ImgPath, RecentActivity } from 'utils/Constant'

const RecentActivities = () => {
    return (
        <div className='recent-activity notification'>
            <h5>{RecentActivity}</h5>
            <ul>
                {
                    RecentActivityData.map((item, i) => (
                        <li key={i} className='d-flex' >
                            <div className={`activity-dot-${item.status}`} />
                            <div className='w-100 ms-3'>
                                <p className='d-flex justify-content-between mb-2' >
                                    <span className='date-content light-background'>{item.date}</span>
                                </p>
                                <h6 className='m-0' >
                                    {item.title}
                                    <span className='dot-notification' />
                                </h6>
                                <span className='f-light'>{item.subTitle}</span>
                                {item.image && (
                                    <div className='recent-images'>
                                        <ul >
                                            {item.image.map((imageItem, i) => (
                                                <li key={i}>
                                                    <div className='recent-img-wrap'>
                                                        <img className='m-0' src={`${ImgPath}/dashboard-2/product/${imageItem}.png`} alt='chair' />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default RecentActivities