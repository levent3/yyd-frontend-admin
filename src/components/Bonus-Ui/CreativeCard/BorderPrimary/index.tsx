import CardHead from 'CommonElements/CardHead'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { BryanOwens, GloriaAcheson, TeresaMosteller } from 'utils/Constant'
import user1 from '/public/assets/images/user/1.jpg';
import user2 from '/public/assets/images/user/3.png';
import user3 from '/public/assets/images/user/5.jpg';

const BorderPrimary = () => {
    const subMenu = [
        {
            text: 'Use the class of',
            code: '.b-l-* '
        },
        {
            text: 'for left border and ',
            code: '.border-3 '
        },
        {
            text: 'is used to increase the width of the border.'
        }
    ]
    return (
        <Col md={6} xxl={4}>
            <Card className='height-equal'>
                <CardHead title='Border Primary State' subTitle={subMenu} headClass='border-l-primary border-3' />
                <CardBody>
                    <div className="list-group">
                        <span className="list-group-item list-group-item-action pointer active">
                            <Image className="rounded-circle" src={user1} alt="user" />{TeresaMosteller}
                        </span>
                        <span className="list-group-item list-group-item-action pointer" >
                            <Image className="rounded-circle" src={user2} alt="user" />{GloriaAcheson}
                        </span>
                        <span className="list-group-item list-group-item-action pointer" >
                            <Image className="rounded-circle" src={user3} alt="user" />{BryanOwens}
                        </span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BorderPrimary