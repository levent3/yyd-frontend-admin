import SvgIcon from 'CommonElements/Icons/SvgIcon'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import SquaregroupUi from '../SquareGroupUi'

type propsType = {
    data: any;
    mainClass?: string
}

const CourseBox = ({ data, mainClass }: propsType) => {
    return (
        <Card className={`course-box ${mainClass ? mainClass : ''}`}>
            <CardBody>
                <div className='course-widget'>
                    <div className={`course-icon ${data.color ? data.color : ''}`}>
                        <SvgIcon className='fill-icon' iconId={data.icon} />
                    </div>
                    <div>
                        <h4 className='mb-0'>{data.course}</h4>
                        <span className='f-light'>{data.title}</span>
                        <Link className='btn btn-light f-light' href={`/learning/learning-list-view`}>
                            {data.link}
                            <span className='ms-2'>
                                <SvgIcon className='fill-icon f-light' iconId='arrowright' />
                            </span>
                        </Link>
                    </div>
                </div>
            </CardBody>
            <SquaregroupUi />
        </Card>
    )
}

export default CourseBox