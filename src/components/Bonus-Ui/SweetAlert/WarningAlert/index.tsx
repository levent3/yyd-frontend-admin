import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Warning } from 'utils/Constant'
import Swal from 'sweetalert2';

const WarningAlert = () => {

    const handleAlert = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({ text: 'Poof! Your imaginary file has been deleted!', icon: 'success' }
                )
            } else {
                Swal.fire({ text: 'Your imaginary file is safe!' })
            }
        })
    }

    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Warning Alert ' subTitle={[{ text: 'Warning for imaginary files.' }]} />
                <CardBody className="btn-showcase">
                    <Button color='warning' className="sweet-5" type="button" onClick={handleAlert}>{Warning}</Button>
                </CardBody>
            </Card>
        </Col>

    )
}

export default WarningAlert