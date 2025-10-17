import { ValuableCustomerData } from 'Data/Dashboard/E-commerceData'
import Link from 'next/link'
import React from 'react'
import { CardBody } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const CustomerList = () => {
    return (
        <CardBody className='pt-0'>
            <div className='appointment-table customer-table table-responsive'>
                <table className='table-bordernone'>
                    <tbody>
                        {ValuableCustomerData.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <img className='img-fluid img-40 rounded-circle me-2' src={`${ImgPath}${item.image}`} alt='user' />
                                </td>
                                <td className='img-content-box'>
                                    <Link className='f-w-500' href={`/user-profile`}>
                                        {item.name}
                                    </Link>
                                    <span className='f-light'>{item.email}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </CardBody>
    )
}

export default CustomerList