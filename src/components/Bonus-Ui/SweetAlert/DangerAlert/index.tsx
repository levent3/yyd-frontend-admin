import CardHead from 'CommonElements/CardHead';
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import Swal from 'sweetalert2';
import { Dangermode } from 'utils/Constant';

const DangerAlert = () => {
    const handleAlert = () => {
        Swal.fire({
            title: "it's danger",
            text: 'Something went wrong!',
            icon: 'error'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Danger Alert' subTitle={[{ text: 'Print the danger message.' }]} />
                <CardBody className="btn-showcase">
                    <Button color='danger' className="sweet-13" type="button" onClick={handleAlert}>{Dangermode}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DangerAlert