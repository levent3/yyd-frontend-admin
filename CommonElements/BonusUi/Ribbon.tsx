import React from 'react'
import { Col } from 'reactstrap'

type propsType = {
    ribbonText: string | JSX.Element;
    subText: string | JSX.Element;
    classMain: string;
    ribbonClass: string;
}

const Ribbon = ({ ribbonText, subText, classMain, ribbonClass }: propsType) => {
    return (
        <Col xl={4} sm={6}>
            <div className={classMain}>
                <div className={ribbonClass}>{ribbonText}</div>
                <p>{subText}</p>
            </div>
        </Col>
    )
}

export default Ribbon