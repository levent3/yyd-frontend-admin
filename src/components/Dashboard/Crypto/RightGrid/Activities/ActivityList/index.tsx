import { activitiesMyOption } from 'Data/Dashboard/CryptoData'
import Link from 'next/link'
import React from 'react'
import { Table } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const ActivityList = () => {
    return (
        <Table className='table-bordernone'>
            <tbody>
                {activitiesMyOption.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <img className='img-fluid img-40 rounded-circle me-2' src={`${ImgPath}/${item.image}`} alt='user' />
                        </td>
                        <td className='img-content-box'>
                            <Link className='d-block f-w-500' href={`/app/users/profile`}>
                                {item.title}
                            </Link>
                            <span className='f-light'>{item.subTitle}</span>
                        </td>
                        <td className='text-end'>
                            <span className={`font-${item.status}`}>{item.price}</span>
                            <span className='d-block f-light'>{item.total}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ActivityList