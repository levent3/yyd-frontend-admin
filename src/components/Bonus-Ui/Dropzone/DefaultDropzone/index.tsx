import CardHead from "CommonElements/CardHead";
import React, { useState } from "react";
import { FilePond } from "react-filepond";
import { Card, CardBody, Col } from "reactstrap";

const DefaultDropzone = () => {
  const [files, setFiles] = useState([]);

  const defaultDropzoneData = [
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
        <CardHead title="Default File Upload" subTitle={defaultDropzoneData} />
        <CardBody>
          <FilePond files={files} onupdatefiles={() => setFiles} allowMultiple={true} allowImagePreview={false} maxFiles={1} labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultDropzone;
