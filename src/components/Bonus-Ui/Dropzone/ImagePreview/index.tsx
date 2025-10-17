import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImagePreview = () => {
    const [files, setFiles] = useState([])

    const imagePreviewData = [
        {
          text: "We use the create method to turn a ",
          code: `<input type='file">`,
        },
        {
          text: " into a FilePond drop area.",
          code: `[https://www.npmjs.com/package/react-filepond]`,
        },
      ];

    return (
        <Col lg={6}>
            <Card>
                <CardHead title='Image Preview' subTitle={imagePreviewData} />
                <CardBody>
                    <FilePond
                        files={files}
                        allowReorder={true}
                        allowMultiple={true}
                        maxFiles={1}
                        onupdatefiles={() => setFiles}
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'
                    />
                </CardBody>
            </Card>
        </Col>
    )
}

export default ImagePreview