import CardHead from 'CommonElements/CardHead'
import React from 'react'
import Dropzone from 'react-dropzone-uploader';
import { Card, CardBody, Col } from 'reactstrap'

const SingleFileupload = () => {

    const singleFileupload = [
        {
          text: "Use the ",
          code: `Dropzone`,
        },
        {
          text: " component through create upload files.",
          code: `[https://www.npmjs.com/package/react-filepond]`,
        },
      ];

    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    }
    return (
        <Col lg={6}>
            <Card>
                <CardHead title='Single File Upload' subTitle={singleFileupload} />
                <CardBody>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        maxFiles={1}
                        inputContent="Drop files here or click to upload."
                    />
                </CardBody>
            </Card>
        </Col>
    )
}

export default SingleFileupload