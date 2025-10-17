//@ts-nocheck
import React, { useEffect, useState } from 'react'
import Rating from 'react-rating';
import { CardBody } from 'reactstrap'

const MovingRatingBody = () => {
    const [rating, setRating] = useState(1);
    const [Status, setStatus] = useState('Bad')

    useEffect(() => {
        switch (rating) {
            case 1:
                setStatus('Bad');
                break;
            case 2:
                setStatus('Disagree');
                break;
            case 3:
                setStatus('Neither Agree or Disagree');
                break;

            default:
                setStatus('Agree');
                break;
        }
    }, [rating])

    return (
        <CardBody>
            <div className='rating '>
                <Rating
                    stop={4}
                    initialRating={rating}
                    emptySymbol='br-widget'
                    fullSymbol='br-widget br-current'
                    onChange={(rate: number) => setRating(rate)}
                />
                <span className='text-primary current-rating fs-6 ms-5'>{Status}</span>
            </div>
        </CardBody>
    )
}

export default MovingRatingBody