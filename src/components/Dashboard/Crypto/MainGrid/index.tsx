import { CurrenciesWidgets } from 'Data/Dashboard/CryptoData'
import React from 'react'
import { Col, Row } from 'reactstrap'
import CurrencyWidget from './CurrencyWidget'
import Marketgraph from './MarketGraph'
import MyCurrencies from './MyCurrencies'
import BuyCard from './BuyCard'
import SellCard from './SellCard'

const Maingrid = () => {
    return (
        <Col xxl={6} xl={8} className='box-col-8e'>
            <Row>
                {CurrenciesWidgets.map((item, i) => (
                    <Col key={i} sm={4}>
                        <CurrencyWidget data={item} />
                    </Col>
                ))}
                <Col xl={12}>
                    <Marketgraph />
                </Col>
                <Col xl={12}>
                    <MyCurrencies />
                </Col>
                <Col sm={6}>
                    <BuyCard />
                </Col>
                <Col sm={6}>
                    <SellCard />
                </Col>
            </Row>
        </Col>
    )
}

export default Maingrid