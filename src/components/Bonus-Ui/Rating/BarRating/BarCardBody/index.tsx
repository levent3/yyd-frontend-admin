//@ts-nocheck
import React, { useState } from 'react'
import Rating from 'react-rating'
import { CardBody } from 'reactstrap'

const BarCardBody = () => {
    const [rating, setRating] = useState(5)
    return (
        <CardBody>
            <div className='rating '>
                <Rating
                    stop={10}
                    initialRating={rating}
                    emptySymbol='br-selected'
                    fullSymbol='br-selected br-current'
                    onChange={(rate) => setRating(rate)}
                />
                <span className='current-rating'>{rating}</span>
            </div>
        </CardBody>
    )
}

export default BarCardBody