import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Questionsstate } from 'utils/Constant'
import Swal from 'sweetalert2';

const QuestionAlert = () => {
    const buttonStyle = Swal.mixin({
        customClass: {
            cancelButton: 'btn-primary'
        },
        buttonsStyling: true
    })
    const handleAlert = () => {
        buttonStyle.fire({
            text: "Are you sure you want to do this?",
            showCancelButton: true,
            cancelButtonText: 'Aww yiss!',
            confirmButtonText: 'oh noez!',
            confirmButtonColor: 'gray'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Questions Alert' subTitle={[{ text: 'Print the questionary and give answers.' }]} />
                <CardBody className="btn-showcase">
                    <Button color='primary' className="sweet-11" type="button" onClick={handleAlert}>{Questionsstate}</Button>
                </CardBody>
            </Card>
        </Col>

    )
}

export default QuestionAlert