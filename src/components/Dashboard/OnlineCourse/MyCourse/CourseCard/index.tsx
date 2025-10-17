import React from 'react'
import { ImgPath } from 'utils/Constant'

type propsType = {
    data: {
        title: string
        arrowImage: string
        courseImage: string
    }
}

const CourseCard = ({ data }: propsType) => {
    return (
        <div className='course-wrapper'>
            <div className='course-icon-box'>
                <div className='icon-wrap'>
                    <img src={`${ImgPath}/dashboard-3/course/${data.courseImage}.svg`} alt='clock vector' />
                </div>
                <img className='arrow-bg' src={`${ImgPath}/dashboard-3/course/back-arrow/${data.arrowImage}.png`} alt='sqaure border arrow' />
            </div>
            <h6 className='f-14'>{data.title}</h6>
        </div>
    )
}

export default CourseCard