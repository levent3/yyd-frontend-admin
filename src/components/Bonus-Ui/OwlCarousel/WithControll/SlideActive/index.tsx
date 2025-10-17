import { SlideData } from 'Data/Bonus-Ui/OwlCarouselDara';
import React, { Fragment } from 'react'
import Slider from 'react-slick';
import { ImgPath } from 'utils/Constant';

const SlideActive = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    };

    return (
        <Fragment>
            <Slider {...settings} >
                {
                    SlideData && SlideData.slice(0, 6).map((item, index) => (
                        <div className="item" key={index}>
                            <img src={`${ImgPath}${item}`} alt='img' className='img-fluid' />
                        </div>
                    ))
                }
            </Slider>
        </Fragment>
    )
}

export default SlideActive