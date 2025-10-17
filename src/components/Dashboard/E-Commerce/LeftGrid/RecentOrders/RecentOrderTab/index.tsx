import TableHead from 'CommonElements/TableHead';
import { RecentHeader } from 'Data/Dashboard/E-commerceData';
import React from 'react'
import { TabContent, TabPane, Table } from 'reactstrap';
import OrderTabDetail from './OrderTabDetail';

type propsType = {
    RecentOrdersNav: string[]
    isActive: string
}

const RecentOrderTab = ({ RecentOrdersNav, isActive }: propsType) => {
    return (
        <TabContent activeTab={isActive}>
            {RecentOrdersNav.map((item, i) => {
                return (
                    <TabPane key={i} className={`fade ${isActive === `${i}` && 'show'}`} tabId={`${i}`}>
                        <div className='recent-table table-responsive'>
                            <table className='table'>
                                <TableHead headeData={RecentHeader} />
                                <OrderTabDetail i={i} />
                            </table>
                        </div>
                    </TabPane>
                );
            })}
        </TabContent>
    )
}

export default RecentOrderTab