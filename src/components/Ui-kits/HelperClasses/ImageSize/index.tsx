import CardHead from 'CommonElements/CardHead'
import { ImageData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const ImageSize = () => {
    const submenuObj = [
        {
            text: "Use the width and height of images class like: ",
            code: '.img-*'
        },
        {
            text: "and",
            code: '.img-h-*'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CardHead title='Images Sizes' subTitle={submenuObj} />
                <CardBody>
                    <div className='gradient-border gap-3'>
                        {
                            ImageData && ImageData.map((item, index) => (
                                <img className={item.class} src={`${ImgPath}/blog/comment.jpg`} alt="img-size-10" key={index} />
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ImageSize