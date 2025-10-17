//@ts-nocheck
import React, { useEffect, useState } from 'react'
import Rating from 'react-rating';
import { CardBody } from 'reactstrap'

const ReverseRatingBody = () => {
    const [rating, setRating] = useState(2);
    const [status, setStatus] = useState('Disagree');
    const data = [1, 2, 3, 4, 5];
    useEffect(() => {
        switch (rating) {
            case 1:
                setStatus('Strongly Disagree');
                break;
            case 2:
                setStatus('Disagree');
                break;
            case 3:
                setStatus('Neither Agree or Disagree');
                break;
            case 4:
                setStatus('Agree')
                break;
            default:
                setStatus('Strongly Agree');
                break;
        }
    }, [rating])

    return (
        <CardBody>
            <div className='rating reverse'>
                <Rating
                    initialRating={rating}
                    emptySymbol={data.map((n) => (
                        <span className='square-number active' key={n} />
                    ))}
                    fullSymbol={data.map((n) => (
                        <span className='square-number bg-primary border-primary' key={n} />
                    ))}
                    direction='rtl'
                    onChange={(rate: number) => { setRating(rate); }}
                />
                <span className='text-primary current-rating fs-6 ms-5'>{status}</span>
            </div>
        </CardBody>
    )
}

export default ReverseRatingBody