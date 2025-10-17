import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col, Media, Row } from 'reactstrap'

type propsType = {
    iconType: string[]
    parentCallback: (tag: string) => void;
}
const FeatherCommon = ({ iconType, parentCallback }: propsType) => {
    const featherIcons = require("feather-icons");
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Feather Icons' subTitle={[]} />
                <CardBody>
                    <Row className='icon-lists feather-icons'>
                        {
                            iconType && iconType.map((item, index) => (
                                <Col sm={6} xs={12} xl={4} key={index} onClick={(e) => parentCallback(item)}>
                                    <Media>
                                        <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[item].toSvg(item) }} />
                                        <Media body className='align-self-center'>
                                            <h6 className='mt-0'>{item}</h6>
                                        </Media>
                                    </Media>
                                </Col>
                            ))
                        }
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FeatherCommon