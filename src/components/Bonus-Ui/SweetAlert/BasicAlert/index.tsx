import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import CardHead from '../../../../../CommonElements/CardHead'
import { Clickit } from 'utils/Constant'
import Swal from 'sweetalert2'

const BasicAlert = () => {
    const subMenu = [
        {
            text: 'Print the basic message.'
        }
    ]
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Basic Example' subTitle={subMenu} />
                <CardBody className="btn-showcase">
                    <Button
                        color='primary'
                        className="sweet-1"
                        type="button"
                        onClick={() => Swal.fire('Welcome! to the cuba theme')}
                    >
                        {Clickit}
                    </Button>
                </CardBody>
            </Card>
        </Col >
    )
}

export default BasicAlert