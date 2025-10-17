import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import { ActiveLessonsTitle, View } from 'utils/Constant'
import LessonsList from './Lessonslist'

const ActiveLessons = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>{ActiveLessonsTitle}</h5>
                    <div className='card-header-right-icon'>
                        <a className='link-only' href='#'>
                            {View} <FeatherIconCom iconName='ArrowRight' />
                        </a>
                    </div>
                </div>
            </CardHeader>
            <LessonsList />
        </Card>
    )
}

export default ActiveLessons
