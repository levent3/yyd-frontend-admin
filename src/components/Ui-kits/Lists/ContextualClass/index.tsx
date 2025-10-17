import CardHead from 'CommonElements/CardHead'
import { ContextualListData } from 'Data/Ui-kits/ListData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const ContextualClass = () => {
    const submenuObj = [
        {
            text: 'Use contextual classes to style list items with a stateful background and color.',
            code: '.list-light-*'
        },
        {
            text: ' and ',
            code: 'txt-*.'
        }
    ]
    return (
        <Col xxl={6} sm={12} className='box-col-12'>
            <Card>
                <CardHead title='Contextual classes' subTitle={submenuObj} />
                <CardBody>
                    <div className="list-group">
                        {
                            ContextualListData && ContextualListData.map((item, index) => (
                                <a className={`list-group-item list-group-item-action ${item.class}`} key={index} href="#">
                                    {item.htmlText}
                                </a>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ContextualClass