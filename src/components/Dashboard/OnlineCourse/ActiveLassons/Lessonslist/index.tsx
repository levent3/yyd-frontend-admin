import { ActiveLessonsList } from 'Data/Dashboard/OnlineCourseData'
import React from 'react'
import { CardBody } from 'reactstrap'
import { ImgPath } from 'utils/Constant'
import LessonCharts from '../LessonCharts'

const LessonsList = () => {
    return (
        <CardBody className='pt-0'>
            <ul className='lessons-lists'>
                {ActiveLessonsList.map((item, i) => (
                    <li key={i}>
                        <img src={`${ImgPath}/dashboard-3/lessons/${item.image}`} alt='ux icon' />
                        <div>
                            <h6 className='f-14 f-w-400 mb-0'>{item.title}</h6>
                            <span className='f-light'>{item.subTitle}</span>
                        </div>
                        <div className='lesson-wrap ms-auto'>
                            <LessonCharts chartData={item.chart} />
                        </div>
                    </li>
                ))}
            </ul>
        </CardBody>
    )
}

export default LessonsList