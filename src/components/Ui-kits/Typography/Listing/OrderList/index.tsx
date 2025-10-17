import React from 'react'
import { Col } from 'reactstrap'
import { Accordion, Alert, Animations, Avatars, BonusUi, Dropdown, Grid, Order_list, Tabs, Tagpills, Typography, UIKits } from 'utils/Constant'

const OrderList = () => {
    return (
        <Col md={6} xxl={4}>
            <div className='card-wrapper border rounded-3 h-100'>
                <h6 className="sub-title fw-bold">{Order_list}</h6>
                <ol>
                    <li>{UIKits}</li>
                    <li>{BonusUi}</li>
                    <li>{Animations}</li>
                    <li>
                        <ol>
                            <li>{Typography}</li>
                            <li>{Avatars}</li>
                            <li>{Grid}</li>
                            <li>{Tagpills}</li>
                            <li>{Alert}</li>
                        </ol>
                    </li>
                    <li>{Dropdown}</li>
                    <li>{Tabs}</li>
                    <li>{Accordion}</li>
                </ol>
            </div>
        </Col>
    )
}

export default OrderList