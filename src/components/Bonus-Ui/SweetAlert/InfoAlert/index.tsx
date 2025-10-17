import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Informational } from 'utils/Constant'
import Swal from 'sweetalert2'

const InfoAlert = () => {

    const handleAlert = () => {
        Swal.fire({
            text: "Please Click on this button it's big surprise for you.",
            confirmButtonText: 'ok',
        }).then((result) => {
            result.isConfirmed && Swal.fire({ text: 'Thank you for visit cuba theme: true' })
        })
    }

    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Info Alert ' subTitle={[{ text: 'Print the informational message.' }]} />
                <CardBody className="btn-showcase">
                    <Button color='info' className="sweet-4" type="button" onClick={handleAlert}>{Informational}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default InfoAlert