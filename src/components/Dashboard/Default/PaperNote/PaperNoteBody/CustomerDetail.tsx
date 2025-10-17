import React, { Fragment } from 'react'
import { ImgPath } from 'utils/Constant'
import DetailList from './DetailList'

const CustomerDetail = () => {
    const data = [1, 6, 7, 3, 8, 5]
    return (
        <div className='mt-sm-4 mt-2 user-details'>
            <div className='customers'>
                <ul>
                    {data.map((item, i, arr) => (
                        <Fragment key={i}>
                            {i !== arr.length - 1 && (
                                <li className='d-inline-block' >
                                    <img className='m-0 img-40 rounded-circle' src={`${ImgPath}/dashboard/user/${item}.jpg`} alt='user' />
                                </li>
                            )}
                            {i === arr.length - 1 && (
                                <li className='d-inline-block'>
                                    <div className='light-card'>
                                        <span className='f-w-500'>+{item}</span>
                                    </div>
                                </li>
                            )}
                        </Fragment>
                    ))}
                </ul>
            </div>
            <DetailList />
        </div>
    )
}

export default CustomerDetail