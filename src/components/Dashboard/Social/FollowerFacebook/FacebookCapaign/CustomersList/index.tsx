import React from 'react'
import { ImgPath } from 'utils/Constant'

const CustomersList = () => {
    const customersList = ['1', '6', '7', '3', '8'];
    return (
        <div className='customers'>
            <ul>
                {customersList.map((item, i) => (
                    <li className='d-inline-block' key={i}>
                        <img className='m-0 img-40 rounded-circle' src={`${ImgPath}/dashboard/user/${item}.jpg`} alt='user' />
                    </li>
                ))}
                <li className='d-inline-block'>
                    <div className='light-card'>
                        <span className='f-w-500'>+5</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CustomersList