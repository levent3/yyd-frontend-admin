import CardHead from 'CommonElements/CardHead'
import Image from 'next/image'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { Card, CardBody, Col } from 'reactstrap'
import { CustomScrollbar, CustomScrolltext, CustomScrolltext2, CustomScrolltext3, CustomScrolltext4, ImgPath } from 'utils/Constant'

const CustomScroll = () => {
    const submenuObj = [
        {
            text: "Used ",
            code: '.vertical-scroll '
        },
        {
            text: 'and ',
            code: '.scroll-demo '
        },
        {
            text: 'through design scrollbar.'
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Custom Scrollbar' subTitle={submenuObj} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo' style={{ width: '100%', height: 300 }}>
                        <h5 className="pb-2">{CustomScrollbar}</h5>
                        <p>{CustomScrolltext4}</p>
                        <div className="scrollbar-images">
                            <Image className="img-fluid" src={`${ImgPath}/banner/1.jpg`} alt="banner" width={699} height={464} />
                        </div>
                        <p>{CustomScrolltext}</p>
                        <p>{CustomScrolltext2}</p>
                        <p>{CustomScrolltext3}</p>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CustomScroll