import { Card, CardBody, Col, Form, Row } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import BasicRangeDemo from './BasicRangeDemo'

export const RangeSliderData=[
    {
        text:"Use the ",
        code:"range-slider",
    },
    {
        text:" npm package",
        code:`[https://www.npmjs.com/package/react-range]`,
    },
]

const Basicrange = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Basic Slider' subTitle={RangeSliderData} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider primary-range">
                        <Row className="mb-0">
                            <Col md={12}>
                                <BasicRangeDemo />
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Basicrange