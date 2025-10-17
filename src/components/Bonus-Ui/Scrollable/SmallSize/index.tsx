import CardHead from 'CommonElements/CardHead'
import Image from 'next/image'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath, SmallScrollText, SmallScrollText2, SmallScrollText3 } from 'utils/Constant'

const SmallSizeScroll = () => {
    const submenuObj = [
        {
            text: "Use the ",
            code: '.scrollbar-margins '
        },
        {
            text: 'through small scroll and image is draggable. '
        }
    ]
    return (
        <Col xl={6}>
            <Card>
                <CardHead title='Small Size Scrollbar' subTitle={submenuObj} />
                <CardBody>
                    <div className="scroll-bar-wrap">
                        <Scrollbars className="scrollbar-margins large-margin scroll-demo pt-2 ps-2 pe-0" style={{ width: '100%', height: 300 }}>
                            <div className="margin-scrollbar">
                                <h5 className="pb-2">{SmallScrollText}</h5>
                            </div>
                            <p>
                                {SmallScrollText2}
                                <Image className="img-fluid pt-3" src={`${ImgPath}/banner/3.jpg`} alt="business" width={800} height={600} />
                            </p>
                            <p>{SmallScrollText3}</p>
                        </Scrollbars>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SmallSizeScroll