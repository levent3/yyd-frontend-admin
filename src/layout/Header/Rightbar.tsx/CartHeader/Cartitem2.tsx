import Image from 'next/image'
import React from 'react'
import { X } from 'react-feather'
import { Button, Input } from 'reactstrap'
import { FurnitureChair } from 'utils/Constant'

const Cartitem2 = () => {
    return (
        <li>
            <div className="media">
                <Image className="img-fluid b-r-5 me-3 img-60" src="/assets/images/other-images/cart-img.jpg" alt='cart-image' width={100} height={100} />
                <div className="media-body">
                    <span>{FurnitureChair}</span>
                    <div className="qty-box">
                        <div className="input-group">
                            <span className="input-group-prepend">
                                <Button className="quantity-left-minus" type="button" data-type="minus" data-field>-</Button>
                            </span>
                            <Input className="form-control input-number" type="text" name="quantity" defaultValue={1} />
                            <span className="input-group-prepend">
                                <Button className="quantity-right-plus" type="button" data-type="plus" data-field>+</Button>
                            </span>
                        </div>
                    </div>
                    <h6 className="font-primary">$500.00</h6>
                </div>
                <div className="close-circle">
                    <a className="bg-danger" href="#"><X /></a>
                </div>
            </div>
        </li>
    )
}

export default Cartitem2