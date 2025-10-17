import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import { Moviemode } from 'utils/Constant'

const MovieAlert = () => {

    const handleAlert = () => {
        Swal.fire({
            text: 'Search for a movie. e.g. "Herry Poter".',
            input: 'text'
        }).then((name) => {
            if (!name) throw null;

            return fetch(
                `https://itunes.apple.com/search?term=${name.value}&entity=movie`
            );
        })
            .then((results) => {
                return results.json();
            })
            .then((json) => {
                const movie = json.results[0];

                if (!movie) {
                    return Swal.fire("No movie was found!");
                }
                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;
                Swal.fire({
                    imageUrl: imageURL,
                    text: name
                });
            })
            .catch((err) => {
                if (err) {
                    Swal.fire("Oh noes!", "The AJAX request failed!", "error");
                }
            });
    }

    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CardHead title='AJAX Request Movie' subTitle={[{ text: 'Give the movie name & return value.' }]} />
                <CardBody className="btn-showcase">
                    <Button color='secondary' className="sweet-15" type="button" onClick={handleAlert}>{Moviemode}</Button>
                </CardBody>
            </Card>
        </Col>

    )
}

export default MovieAlert