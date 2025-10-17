import { RecentSalesData } from 'Data/Dashboard/DefaultData'
import Link from 'next/link'
import React from 'react'
import { CardBody, Table } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const SalesBody = () => {
    return (
        <CardBody className='pt-0'>
            <div className='appointment-table table-responsive'>
                <Table className='table-bordernone'>
                    <tbody>
                        {
                            RecentSalesData && RecentSalesData.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <img className='img-fluid img-40 rounded-circle' src={`${ImgPath}/${item.image}`} alt='user' />
                                    </td>
                                    <td className='img-content-box'>
                                        <Link className='d-block f-w-500' href={`/app/users/profile`}>
                                            {item.title}
                                        </Link>
                                        <span className='f-light'>{item.subTitle}</span>
                                    </td>
                                    <td className='text-end'>
                                        <p className='m-0 font-success'>{item.badge}</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </CardBody>
    )
}

export default SalesBody