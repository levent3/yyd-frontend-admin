//@ts-nocheck
import React, { useState } from 'react'
import Rating from 'react-rating';
import { CardBody } from 'reactstrap'

const SquareRatingBody = () => {
    const [rating, setRating] = useState(3);
    const data = [1, 2, 3, 4, 5]

    return (
        <CardBody>
            <div className='rating '>
                <Rating
                    initialRating={rating}
                    emptySymbol={data.map((n: number) => (
                        <span className='square-number' key={n}>{n}</span>
                    ))}
                    fullSymbol={data.map((n: number) => (
                        <span className='square-number active' key={n}>{n}</span>
                    ))}
                    onChange={(rate) => setRating(rate)} />
            </div>
        </CardBody>
    )
}

export default SquareRatingBody