import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Loginsuccessfully } from 'utils/Constant'
import Swal from 'sweetalert2';

const SuccessMessage = () => {
    const handleAlert = () => {
        Swal.fire({
            title: "Good job!",
            text: 'You clicked the button!',
            icon: 'success'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Success Message' subTitle={[{ text: 'Print the success message.' }]} />
                <CardBody className="btn-showcase">
                    <Button color='success' className="sweet-13" type="button" onClick={handleAlert}>{Loginsuccessfully}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SuccessMessage