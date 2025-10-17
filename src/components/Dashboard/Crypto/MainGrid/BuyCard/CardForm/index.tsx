import React from 'react'
import { Button, Form, Input, Label } from 'reactstrap'
import { BTC, ETH, LTC, USD } from 'utils/Constant';

type propsType = {
    label1: string;
    label2: string;
    buttonText: string
}

const CardForm = ({ label1, label2, buttonText }: propsType) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <Form onSubmit={handleSubmit} className='theme-form crypto-form'>
            <div className='mb-3'>
                <Label className='form-label f-light' for='money'>{label1}</Label>
                <div className='position-relative'>
                    <Input className='form-control' id='money' type='number' placeholder='100' />
                    <select className='form-select crypto-select warning'>
                        <option>{USD}</option>
                        <option>{BTC}</option>
                        <option>{LTC}</option>
                        <option>{ETH}</option>
                    </select>
                </div>
            </div>
            <div className='mb-3'>
                <Label className='form-label f-light' for='coin'>{label2}</Label>
                <div className='position-relative'>
                    <Input className='form-control' id='coin' type='number' placeholder='0.0043' />
                    <select className='form-select crypto-select primary'>
                        <option>{BTC}</option>
                        <option>{USD}</option>
                        <option>{LTC}</option>
                        <option>{ETH}</option>
                    </select>
                </div>
            </div>
            <Button type='submit' color='primary' className='btn-hover-effect w-100' >{buttonText}</Button>
        </Form>
    )
}

export default CardForm