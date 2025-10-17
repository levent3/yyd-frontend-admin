import CardHead from 'CommonElements/CardHead'
import { HorizontalColor, HorizontalListData } from 'Data/Ui-kits/ListData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const HorizontalList = () => {
    const submenuObj = [
        {
            text: 'Use ',
            code: '.list-group-horizontal'
        },
        {
            text: 'to change the layout of list group items from vertical to horizontal across all breakpoints.',
            code: '.list-group-horizontal-[sm/md/lg/xl/xxl].'
        }
    ]
    return (
        <Col xxl={6} xs={12} className='box-col-12' >
            <Card className='height-equal'>
                <CardHead title='Horizontal lists' subTitle={submenuObj} />
                <CardBody>
                    <div className='horizontal-list-wrapper dark-list'>
                        {
                            HorizontalListData && HorizontalListData.map((item, index) => (
                                <ul className={`fw-medium list-group ${item.class}`} key={index}>
                                    {
                                        item.data && item.data.map((data, i) => (
                                            <li className={`list-group-item ${i === 0 && HorizontalColor[index]}`} key={i}>{data}</li>
                                        ))
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default HorizontalList