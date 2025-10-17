import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import TableHead from 'CommonElements/TableHead'
import { AllCampaignsTable } from 'Data/Dashboard/Social'
import React from 'react'
import { Button, Table } from 'reactstrap'

const CampaignsUser = () => {
    return (
        <Table>
            <TableHead headeData={AllCampaignsTable.header} />
            <tbody>
                {AllCampaignsTable.body.map((item, i) => (
                    <tr key={i}>
                        <td className={`border-icon ${item.ADPlatform}`}>
                            <div>
                                <div className='social-circle'>
                                    <i className={`fa fa-${item.icon}`} />
                                </div>
                            </div>
                        </td>
                        <td>{item.campaign}</td>
                        <td>{item.GEO}</td>
                        <td>
                            <div className='change-currency'>
                                {item.profitability > 40 ? <FeatherIconCom iconName='TrendingUp' className='font-success me-1' /> : <FeatherIconCom iconName='TrendingDown' className='font-danger me-1' />}
                                {item.profitability}%
                            </div>
                        </td>
                        <td>${item.maxParticipation}</td>
                        <td>
                            <Button color={`${item.status === 'Inactive' ? 'light' : 'light-primary'} badge-light-${item.status === 'Inactive' ? 'light' : 'primary'}`} className={`${item.status === 'Inactive' && 'disabled'}`}>{item.status}</Button>
                        </td>
                        <td>
                            <button className='plus-btn'>+ </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CampaignsUser