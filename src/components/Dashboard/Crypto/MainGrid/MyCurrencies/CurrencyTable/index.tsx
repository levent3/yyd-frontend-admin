import SvgIcon from 'CommonElements/Icons/SvgIcon';
import TableHead from 'CommonElements/TableHead';
import { CurrencyTablehead, MyCurrenciesTableData } from 'Data/Dashboard/CryptoData';
import React from 'react'
import { TrendingDown, TrendingUp } from 'react-feather';
import { Table } from 'reactstrap';
import { Trade } from 'utils/Constant';

const CurrencyTable = () => {
    return (
        <Table>
            <TableHead headeData={CurrencyTablehead} />
            <tbody>
                {MyCurrenciesTableData.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <div className='d-flex align-items-center gap-2'>
                                <div className={`currency-icon ${item.color}`}>
                                    <SvgIcon iconId={item.icon} />
                                </div>
                                <div>
                                    <h6 className='f-14 mb-0 f-w-400'>{item.title}</h6>
                                </div>
                            </div>
                        </td>
                        <td>${item.price}</td>
                        <td>
                            <div className={`change-currency font-${item.status}`}>
                                {item.status === 'success' ? <TrendingUp className='me-1' /> : <TrendingDown className='me-1' />}
                                {item.gros}
                            </div>
                        </td>
                        <td>${item.totalBalance}</td>
                        <td>{item.totalCoin}</td>
                        <td>
                            <button className='btn badge-light-primary'>{Trade}</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table >
    )
}

export default CurrencyTable