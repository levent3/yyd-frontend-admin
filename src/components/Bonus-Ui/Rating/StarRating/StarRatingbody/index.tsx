//@ts-nocheck
import React, { useState } from 'react'
import Rating from 'react-rating';
import { CardBody } from 'reactstrap';

const StarRatingbody = () => {
    const [rating, setRating] = useState(4);
    return (
        <CardBody>
            <div className='rating'>
                <Rating
                    initialRating={rating}
                    emptySymbol='text-primary star fa fa-star-o fa-2x'
                    fullSymbol='text-primary star fa fa-star fa-2x'
                    onChange={(rate) => setRating(rate)}
                />
            </div>
        </CardBody>
    )
}

export default StarRatingbody