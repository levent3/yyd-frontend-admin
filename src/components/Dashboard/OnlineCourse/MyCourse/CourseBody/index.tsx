import { MyCourseData } from 'Data/Dashboard/OnlineCourseData'
import React from 'react'
import { CardBody } from 'reactstrap'
import CourseCard from '../CourseCard'

const CourseBody = () => {
    return (
        <CardBody className='pt-0'>
            <div className='course-main-card'>
                {MyCourseData.map((item, i) => (
                    <CourseCard key={i} data={item} />
                ))}
            </div>
        </CardBody>
    )
}

export default CourseBody