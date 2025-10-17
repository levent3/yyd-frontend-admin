import SvgIcon from 'CommonElements/Icons/SvgIcon'
import { RecentOrderTable } from 'Data/Dashboard/E-commerceData'
import Link from 'next/link'
import React from 'react'
import { ImgPath } from 'utils/Constant'

const OrderTabDetail = ({ i }: { i: number }) => {
    return (
        <tbody>
            {RecentOrderTable[i].map((item, j) => (
                <tr key={j}>
                    <td>
                        <div className='product-content'>
                            <div className='order-image'>
                                <img src={`${ImgPath}/${item.image}`} alt='t-shirt' />
                            </div>
                            <div>
                                <h6 className='f-14 mb-0'>
                                    <Link href={`/app/ecommerce/orderhistory`}>{item.title}</Link>
                                </h6>
                                <span className='f-light f-12'>Id : {item.id}</span>
                            </div>
                        </div>
                    </td>
                    <td className='f-w-500'>{item.qty}</td>
                    <td className='f-w-500'>${item.price}</td>
                    <td className='f-w-500'>
                        <div className={`recent-status font-${item.statusCode}`}>
                            <SvgIcon iconId={item.iconName} className='me-1' />
                            {item.status}
                        </div>
                    </td>
                    <td className='f-w-500'>${item.total}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default OrderTabDetail