import CardHead from 'CommonElements/CardHead';
import React from 'react'
import { Card, CardBody, Col, Media, Row } from 'reactstrap';

type propsType = {
    iconData: {
        abbrivation: string;
        name: string
    }[]
    callBack: (item: string) => void
}

const FlagCommon = ({ iconData, callBack }: propsType) => {
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Flag Icons' subTitle={[]} />
                <CardBody>
                    <Row className='icon-lists flag-icons'>
                        {iconData && iconData.map((icon, i) => {
                            return (
                                <Col sm={6} xs={12} xl={4} key={i} onClick={(e) => callBack(icon.abbrivation)}>
                                    <Media>
                                        <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
                                        <Media body className='align-self-center'>
                                            <h5>{icon.abbrivation}</h5>
                                            <h6 className='mt-0'>{icon.name}</h6>
                                        </Media>
                                    </Media>
                                </Col>
                            );
                        })}
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}

export default FlagCommon