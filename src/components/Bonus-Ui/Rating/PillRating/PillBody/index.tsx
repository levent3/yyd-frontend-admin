//@ts-nocheck
import React, { useState } from 'react'
import Rating from 'react-rating';
import { CardBody } from 'reactstrap'

const PillBody = () => {
    const [rating, setRating] = useState(2);
    const data = ['A', 'B', 'C', 'D', 'E'];
    return (
        <CardBody>
            <div className='rating pill-rating-list'>
                <Rating
                    initialRating={rating}
                    emptySymbol={data.map((n: string) => (
                        <span className='pill-rating' key={n}>{n}</span>
                    ))}
                    fullSymbol={data.map((n: string) => (
                        <span className='pill-rating br-current' key={n}>{n}</span>
                    ))}
                    onClick={(rate) => setRating(rate)} />
            </div>
        </CardBody>
    )
}

export default PillBody