import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import { Alertmode } from 'utils/Constant'

const WarningMode = () => {
    const handleAlert = () => {
        Swal.fire({
            title: "Good job!",
            text: 'You clicked the button!',
            icon: 'warning'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Warning Mode' subTitle={[{ text: 'Print the warning message' }]} />
                <CardBody className="btn-showcase">
                    <Button color='warning' className="sweet-13" type="button" onClick={handleAlert}>{Alertmode}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default WarningMode