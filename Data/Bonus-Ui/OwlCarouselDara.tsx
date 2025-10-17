
export const SlideData: string[] = [
    '/slider/1.jpg',
    '/slider/2.jpg',
    '/slider/3.jpg',
    '/slider/4.jpg',
    '/slider/5.jpg',
    '/slider/6.jpg',
    '/slider/7.jpg',
    '/slider/8.jpg',
    '/slider/9.jpg',
    '/slider/10.jpg',
    '/slider/11.jpg'
]

export const SlickResponsive = [
    {
        breakpoint: 1400,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
]

export const SliderCaptionData: {src:string,key:number, captionText: string; captionHeader: string }[] = [
    {
      src: "slider/9.jpg",
      key: 1,
      captionText: "You can watch folks you wouldn't have in your house amuse you in your living room thanks to the development of television.",
      captionHeader: "The area in the house that is most comfortable.",
    },
    {
      src: "slider/1.jpg",
      key: 2,
      captionText: "Regardless of how big or tiny your home is, think about hiring an interior designer. They give you a calm living atmosphere in addition to decorating your home.",
      captionHeader: "Drawing Room",
    },
    {
      src: "slider/2.jpg",
      key: 3,
      captionText: "If you want to alter your way of life, start with redesigning your house's interior.",
      captionHeader: "House Interior",
    },
  ];

  export const DarkliderCaptionData = [
    {
      key: 33,
      image: `slider/1.jpg`,
      captionText: "If you have been dreaming about bringing your living room together, our designers are here to help. Come see what we can do for your space.",
      captionHeader: "We decorate our homes",
    },
    {
      key: 34,
      image: `slider/3.jpg`,
      captionText: "A sofa is the ideal spot to enjoy a movie, nod off, and wake up.",
      captionHeader: "This couch is a great topic of conversation.",
    },
    {
      key: 35,
      image: `slider/6.jpg`,
      captionText: "A house you can create with your friends is a great place.",
      captionHeader: "Sometimes all you really need to unwind is a comfortable couch.",
    },
  ];

export const SlideOnlySettongs = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    responsive: SlickResponsive
}

export const Controls = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    responsive: SlickResponsive
}

export const AutoPlaySetting = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 800,
    adaptiveHeight: true,
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    responsive: SlickResponsive
}

export const mouseOverSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    AutoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    pauseOnHover: true
}

export  const SlideSlickOnlySettongs = {
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  arrows: false,
  draggable: false,
  responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 4,
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]
}

export const FadeSlideData = [
    {
      src: "slider/1.jpg",
      key: 1,
    },
    {
      src: "slider/11.jpg",
      key: 2,
    },
    {
      src: "slider/7.jpg",
      key: 3,
    },
    {
      src: "slider/10.jpg",
      key: 3,
    },
  ];