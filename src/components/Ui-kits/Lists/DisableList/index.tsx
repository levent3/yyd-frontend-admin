import CardHead from 'CommonElements/CardHead'
import { DisableListData } from 'Data/Ui-kits/ListData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const DisableList = () => {
    const submenuObj = [
        {
            text: 'Use',
            code: ' .disabled '
        },
        {
            text: 'to a ',
            code: '.list-group-item'
        },
        {
            text: ' to make it appear disabled.'
        }
    ]
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CardHead title='Disabled lists' subTitle={submenuObj} />
                <CardBody>
                    <div className='list-group'>
                        {
                            DisableListData && DisableListData.map((item, index) => (
                                <a className={`list-group-item list-group-item-action ${item.class}`} href="#" key={index}>
                                    <Image className="rounded-circle" src={`${ImgPath}${item.img}`} alt="user" width={100} height={100} />{item.text}
                                </a>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DisableList