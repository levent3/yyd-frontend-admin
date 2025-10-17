import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Username } from 'utils/Constant'
import Swal from 'sweetalert2';

const UserNameAlert = () => {
    const handleAlert = () => {
        Swal.fire({
            input: 'text',
            inputLabel: 'Please! Submit Your Username :'
        }).then((result) => {
            result.isConfirmed && Swal.fire({ text: `Your name is : ${result.value}` })
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Username Alert' subTitle={[{ text: 'Print the basic sweet-alert' }]} />
                <CardBody className="btn-showcase">
                    <Button color='secondary' className="sweet-13" type="button" onClick={handleAlert}>{Username}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default UserNameAlert