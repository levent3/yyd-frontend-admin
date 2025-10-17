//@ts-nocheck
import React, { useState } from 'react'
import Rating from 'react-rating'
import { CardBody } from 'reactstrap'

const Thumbbody = () => {
    const [thumbs, setThumbs] = useState(4);
    return (
        <CardBody>
            <div className='rating'>
                <Rating
                    initialRating={thumbs}
                    emptySymbol='text-primary fa fa-thumbs-down fa-2x'
                    fullSymbol='text-primary fa fa-thumbs-up fa-2x'
                    onClick={(rate) => setThumbs(rate)}
                />
                <span className='text-primary ms-2 mt-1 current-rating'>{thumbs}</span>
            </div>
        </CardBody>
    )
}

export default Thumbbody