import SvgIcon from 'CommonElements/Icons/SvgIcon'
import { portfolioLegend } from 'Data/Dashboard/CryptoData'
import React from 'react'
import { Table } from 'reactstrap'

const PortfolioTable = () => {
    return (
        <Table>
            <tbody>
                {portfolioLegend.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <div className='d-flex align-items-center gap-2'>
                                <div className={`currency-icon ${item.color}`}>
                                    <SvgIcon iconId={item.icon} />
                                </div>
                                <div>
                                    <h6 className='f-14 mb-1'>{item.title}</h6>
                                    <div className='d-flex align-items-center gap-1'>
                                        <span className={`status bg-${item.status}`} />
                                        <span className='f-light'>{item.subTitle}</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='text-end'>
                            <h6 className='f-14 f-w-400 mb-1'>
                                {item.subTitle} {item.price}
                            </h6>
                            <span className={`font-${item.status}`}>${item.totalPrice}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default PortfolioTable