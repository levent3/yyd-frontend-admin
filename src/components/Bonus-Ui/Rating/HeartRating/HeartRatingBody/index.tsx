//@ts-nocheck
import React, { useState } from 'react'
import Rating from 'react-rating';
import { CardBody } from 'reactstrap'

const HeartRatingBody = () => {
    const [rating, setRating] = useState(3);
    return (
        <CardBody>
            <div className='rating'>
                <Rating
                    initialRating={rating}
                    emptySymbol='text-primary fa fa-heart-o fa-2x'
                    fullSymbol='text-primary fa fa-heart fa-2x'
                    onClick={(rate: number) => setRating(rate)}
                />
                <span className='text-primary ms-3 mb-1 current-rating'>{rating}</span>
            </div>
        </CardBody>
    )
}

export default HeartRatingBody