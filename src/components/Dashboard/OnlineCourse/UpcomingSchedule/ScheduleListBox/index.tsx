import SvgIcon from 'CommonElements/Icons/SvgIcon'
import React from 'react'
import { ImgPath } from 'utils/Constant'

type propstype = {
    data: {
        title: string
        image: string
        icon: string
        icon2: string
        date: string
        date2: string
        color: string
    }[]
}

const ScheduleListBox = ({ data }: propstype) => {
    return (
        <ul className='schedule-list d-flex'>
            {
                data && data.map((item, i) => (
                    <li key={i} className={`${item.color}`} >
                        <img src={`${ImgPath}/${item.image}`} alt='profile' />
                        <div>
                            <h6 className='mb-1'>{item.title}</h6>
                            <ul>
                                <li className='f-light' >
                                    <SvgIcon iconId={item.icon} className='fill-icon f-light' />
                                    <span>{item.date}</span>
                                </li>
                                <li className='f-light'>
                                    <SvgIcon iconId={item.icon2} className='fill-icon f-success' />
                                    <span> {item.date2}</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}
        </ul>
    )
}

export default ScheduleListBox