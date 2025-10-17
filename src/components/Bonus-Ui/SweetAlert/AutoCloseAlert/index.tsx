import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import { Timer } from 'utils/Constant'

const AutoCloseAlert = () => {
    const handleAlert = () => {
        Swal.fire({
            title: "Auto close alert!",
            text: 'just a wait! I will close in 3 second!',
            timer: 3000,
            showConfirmButton: false
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Auto Close Timer' subTitle={[{ text: 'A text message with an automatic timer' }]} />
                <CardBody className="btn-showcase">
                    <Button color='primary' className="sweet-14" type="button" onClick={handleAlert}>{Timer}</Button>
                </CardBody>
            </Card>
        </Col>

    )
}

export default AutoCloseAlert