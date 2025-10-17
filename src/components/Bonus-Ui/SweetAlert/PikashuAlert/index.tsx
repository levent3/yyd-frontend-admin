import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Pikachu } from 'utils/Constant'
import Swal from 'sweetalert2';

const PikashuAlert = () => {

    const SwalWithButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn-light-gray',
            cancelButton: 'btn-primary',
            denyButton: 'btn-primary'
        },
        buttonsStyling: true
    })

    const handleAlert = () => {
        SwalWithButtons.fire({
            text: 'A wild Pikachu appeared! What do you want to do?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: 'gray',
            confirmButtonText: 'Run away!',
            denyButtonText: `Defeat`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({ text: 'Got away safely!' })
            } else if (result.isDenied) {
                Swal.fire('Yeah!', 'Pikachu was caught!', 'success')
            }
            else {
                Swal.fire({ text: 'Pikachu fainted! You gained 500 XP!' })
            }
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='Pikachu Alert' subTitle={[{ text: 'catch the pokeball.' }]} />
                <CardBody className="btn-showcase">
                    <Button color='warning' className="sweet-12" type="button" onClick={handleAlert}>{Pikachu}</Button>
                </CardBody>
            </Card>
        </Col>

    )
}

export default PikashuAlert