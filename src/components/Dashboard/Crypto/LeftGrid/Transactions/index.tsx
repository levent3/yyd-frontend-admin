import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Nav, NavItem } from 'reactstrap'
import TransactionHead from './TransactionHead'
import TransactionTable from './TransactionTable';
import { transactionTableData } from 'Data/Dashboard/CryptoData';

const Transactions = () => {
    const [active, setActive] = useState('All');
    return (
        <Card className='tranaction-card'>
            <TransactionHead setActive={setActive} active={active} />
            <CardBody className='pt-0'>
                <div className='fade show table-responsive recent-table transaction-table'>
                    <TransactionTable filterCoins={active} tableData={transactionTableData} />
                </div>
            </CardBody>
        </Card>
    )
}

export default Transactions