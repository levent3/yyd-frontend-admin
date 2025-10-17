//@ts-nocheck
import React, { useState } from 'react'
import Rating from 'react-rating'
import { CardBody } from 'reactstrap'

const HalfStarBody = () => {
    const [rating, setRating] = useState(2.5);
    return (
        <CardBody>
            <div className='rating'>
                <Rating
                    initialRating={rating}
                    fractions={2}
                    emptySymbol='text-primary star fa fa-star-o fa-2x'
                    fullSymbol='text-primary star fa fa-star fa-2x'
                    onChange={(rate) => setRating(rate)}
                />
                <span className='text-primary current-rating'>{rating}</span>
            </div>
        </CardBody>
    )
}

export default HalfStarBody